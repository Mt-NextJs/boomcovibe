'use server';

import { LoginFormData, loginFormSchema } from 'schemas/schema';

export async function fetchLogin(data: LoginFormData) {
    const result = loginFormSchema.safeParse(data);

    if (!result.success) {
        const { fieldErrors, formErrors } = result.error.flatten();
        return { errors: { ...fieldErrors, root: formErrors.join(', ') } };
    }

    const { userId, password } = result.data;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, password }),
        });

        const fetchData = await response.json();

        if (!response.ok) {
            alert('실패');
        } else {
            alert('성공');
            const token = fetchData.data.token;

            localStorage.setItem('token', token);

            return fetchData;
        }

        return { success: true };
    } catch (error) {
        return { errors: { root: 'An unknown error occurred' } };
    }
}
