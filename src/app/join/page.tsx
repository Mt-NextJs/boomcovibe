import AuthForm from '@components/auth-form';
import { Metadata } from 'next';

//metadata
export const metadata: Metadata = {
    title: 'Join',
};

export default function Join() {
    return (
        <div className="flex min-h-[100vh] items-center justify-center">
            <AuthForm type="join"></AuthForm>
        </div>
    );
}
