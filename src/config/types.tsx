export type ClientRouteType = {
    [key: string]: string | ClientRouteType;
};

export type RegisterFormData = {
    id: string;
    password: string;
    confirmPassword: string;
    email: string;
};
