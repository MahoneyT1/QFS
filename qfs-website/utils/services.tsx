/**
 * Services Module
 */
import { auth, db } from "./firebase";
import { doc, setDoc, getDocs, collection, addDoc, serverTimestamp, query, where, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
    updatePassword,
    deleteUser,
} from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { label } from "motion/react-client";


// register user function
export const registerUser = async (
    email: string, password: string, fullName: string,
    phoneNumber: string, username: string) => {

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        const user = userCredentials.user

        await setDoc(doc(db, "users", user.uid), {
            fullName: fullName,
            email: user.email,
            phoneNumber: phoneNumber,
            username: username,
            password: password,
            created: new Date()
        })
        return userCredentials
    } catch (err) {
        throw new Error(String(err));
    }
};

// login user function
export const loginUser = async (email: string, password: string) => {

    try {

        // Now attempt password login
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result;

    } catch (error: any) {

        // Firebase-specific errors
        if (error.code === "auth/wrong-password") {
            throw new Error("Incorrect password. Please try again.");
        }

        if (error.code === "auth/invalid-email") {
            throw new Error("Enter a valid email address.");
        }

        if (error.code === "auth/user-disabled") {
            throw new Error("This account has been disabled.");
        }

        // Custom errors thrown from above
        throw new Error(error.message || "Login failed. Please try again.");
    }
};

// logout user function
export const logoutUser = async () => {
    return await signOut(auth);
};

// update user email function
export const updateUserEmail = async (newEmail: string) => {
    if (auth.currentUser) {
        return await updateEmail(auth.currentUser, newEmail);
    } else {
        throw new Error("No user is currently signed in.");
    }
};

// update user password function
export const updateUserPassword = async (newPassword: string) => {
    if (auth.currentUser) {
        return await updatePassword(auth.currentUser, newPassword);
    } else {
        throw new Error("No user is currently signed in.");
    }
};

// delete user function
export const deleteUserAccount = async () => {
    if (auth.currentUser) {
        return await deleteUser(auth.currentUser);
    } else {
        throw new Error("No user is currently signed in.");
    }
};

// loggin with google email
export const signInWithGoogle = async (auth: any, googleProvider: any) => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result;
    } catch (error) {
        throw new Error("Google sign-in failed. Please try again.");
    }
};


export function getPasswordStrength(password: string): { strength: number, label: string, color: string } {

    if (!password || password.length <= 5 ) return { strength: 0, label: "weak", color: 'red' };

    let strength = 1;
    
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    let label = "weak";
    let color = "red";

    if (strength === 2) {
        label = "fair";
        color = "bg-orange-600";
    } else if (strength === 3) {
        label = "good";
        color = "bg-yellow-500";
    } else if (strength === 4) {
        label = "strong";
        color = "bg-green-400";
    }


    return { strength, label, color };  
} 
