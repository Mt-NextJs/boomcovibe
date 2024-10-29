'use client';

import { ClientRoute } from '@config/route';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useToken from 'store/useToken';
// import { useForm } from 'react-hook-form';
// import { loginFormSchema, SignInSchema } from 'schemas/schema';
// import { zodResolver } from '@hookform/resolvers/zod';

export default function LoginForm() {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors, isSubmitting },
    //     reset,
    //     setError,
    // } = useForm<SignInSchema>({
    //     resolver: zodResolver(loginFormSchema),
    // });

    // const setACToken = useToken((state) => state.setToken);
    // const router = useRouter();

    // const onSubmit: SubmitHandler<SignInSchema> = async (data) => {
    //     try {
    //         const res = await fetch('/api/login', {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 userId: data.userId,
    //                 password: data.password,
    //             }),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });

    //         const responseData = await res.json();
    //         console.log(responseData);

    //         if (responseData?.errors) {
    //             Object.entries(responseData.errors).forEach(
    //                 ([field, message]) => {
    //                     setError(field as SignInFields, {
    //                         type: 'server',
    //                         message: message as string,
    //                     });
    //                 },
    //             );
    //         }

    //         if (responseData?.created) {
    //             reset();
    //             const token = responseData.data.token;
    //             localStorage.setItem('token', token);
    //             setACToken(token);
    //             router.push('/admin');
    //             return responseData;
    //         }
    //     } catch (error) {
    //         console.log(data);
    //     }
    // };

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const setACToken = useToken((state) => state.setToken);
    const router = useRouter();

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formData = new FormData(e.currentTarget);
            const userId = formData.get('userId');
            const password = formData.get('password');

            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formData,
                    userId: userId,
                    password: password,
                }),
            });
            const fetchData = await response.json();

            if (!response.ok) {
                alert('실패');
            } else {
                alert('성공');
                const token = fetchData.data.token;
                localStorage.setItem('token', token);
                setACToken(token);
                router.push('/admin');
                return fetchData;
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <div className="bg-white px-[25px] py-10">
                <div className="relative mb-5 cursor-pointer">
                    <Link href={ClientRoute.MAIN as string}>
                        <Image
                            src="/assets/icons/icon_back.png"
                            alt="back"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>

                <h1 className="pageName text-primary-250">In My Link 로그인</h1>

                <form className="mt-8" onSubmit={handleLogin}>
                    <label htmlFor="userId" className="title">
                        아이디
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        // {...register('userId')}
                        id="userId"
                        name="userId"
                        type="text"
                        value={userId}
                        className="input mb-5"
                        placeholder="아이디를 입력하세요."
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) =>
                            (e.target.placeholder = '아이디를 입력하세요.')
                        }
                        onChange={(e) => setUserId(e.target.value)}
                    ></input>

                    {/* {errors.userId && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                            {errors?.userId?.message}
                        </p>
                    )} */}

                    <label htmlFor="password" className="title">
                        비밀번호
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        // {...register('password')}
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        className="input mb-5"
                        placeholder="********"
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) => (e.target.placeholder = '********')}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>

                    <button
                        className="button color"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? '로그인...' : 'In My Link 로그인'}
                    </button>
                    <Link href={ClientRoute.JOIN as string}>
                        <button className="button gray" type="submit">
                            In My Link 회원가입
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
