interface LoginFormData {
    userId: string;
    password: number;
}

export interface JoinFormData {
    name: string;
    userId: string;
    password: number;
    confirmPassword: number;
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
