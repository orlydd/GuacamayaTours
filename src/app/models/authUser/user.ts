export interface User {
    uid: string;
    email: string;
    name: string;
    photoURL: string;
    role: Roles;
 }
 export interface Roles {
    subscriber?: boolean;
    admin?: boolean;
 }