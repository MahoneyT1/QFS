import { Timestamp } from "firebase/firestore";


export type AuthProvider = "password" | "google";

export type UserRole = "user" | "admin";


export interface AppUser {
    uid: string;
    email: string;
    fullName: string;
    photoURL?: string;

    provider: AuthProvider;

    hasPassword: boolean;

    phoneNumber?: string;
    username?: string;

    role: UserRole;

    createdAt: Timestamp;
    updatedAt?: Timestamp;
}

export interface RegisterUserParams {
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    username: string;
}

export interface GoogleSignInResult {
    user: {
        uid: string;
        email: string;
        displayName: string;
        photoURL?: string;
    }
}
