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


// register user function
export const registerUser = async (email: string, password: string, name: string, phoneNumber: string, username: string) => {

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        const user = userCredentials.user

        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: user.email,
            phoneNumber: phoneNumber,
            username: username,
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

