import { Metadata } from 'next';
import LoginForm from '../components/login-form';

//metadata
export const metadata: Metadata = {
    title: 'Login',
};

export default function Login() {
    return (
        <div className="relative flex min-h-screen w-full max-w-[768px] flex-col gap-5 bg-white">
            <LoginForm></LoginForm>
        </div>
    );
}
