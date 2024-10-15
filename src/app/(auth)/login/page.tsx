import AuthForm from '@app/(auth)/components/auth-form';
import { Metadata } from 'next';

//metadata
export const metadata: Metadata = {
    title: 'Login',
};

export default function Login() {
    return (
        <div className="flex min-h-[100vh] items-center justify-center">
            <AuthForm type="login"></AuthForm>
        </div>
    );
}
