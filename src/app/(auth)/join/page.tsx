import { Metadata } from 'next';
import JoinForm from '../components/join-form';

//metadata
export const metadata: Metadata = {
    title: 'Join',
};

export default function Join() {
    return (
        <div className="relative flex min-h-screen w-full max-w-[768px] flex-col gap-5 bg-white">
            <JoinForm></JoinForm>
        </div>
    );
}
