export interface LoginFormData {
    userId: string;
    password: string;
}

export interface JoinFormData {
    name: string;
    userId: string;
    password: string;
    email: string;
}

export interface User {
    userId: string;
    name: string;
    email: string | null;
    countryCode?: string;
    dateCreate?: string;
    dateUpdate?: string;
}
