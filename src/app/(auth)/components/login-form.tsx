'use client';

import { ClientRoute } from '@config/route';
// import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { RegisterFormData } from 'types/auth';
// import { useForm } from 'react-hook-form';
// import { registerFormSchema } from 'schemas/schema';
// import { RegisterFormData } from 'types/auth';
import useToken from 'store/useToken';

export default function LoginForm() {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();
    const setACToken = useToken((state) => state.setToken);
    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    // } = useForm<RegisterFormData>({
    //     resolver: zodResolver(registerFormSchema),
    // });

    // async function handleRegister(data: RegisterFormData) {
    //     console.log(data);
    //     reset();
    // }

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
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
                setToken(token);
                setACToken(token);
                router.push('/admin');
                return fetchData;
            }
        } catch (error) {
            console.log(error);
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

                <h1 className="pageName">In My Link 로그인</h1>

                <form className="mt-8" onSubmit={handleLogin}>
                    <label htmlFor="userId" className="title">
                        아이디
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        // {...register('id')}
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
                    {/* Login, Join에서 아이디가 유효하지 않을때, 에러처리 */}
                    {/* {errors.id && (
                        <p className="text-sm text-red-600">
                            {errors.id.message as string}
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
                    {/* Login, Join에서 비밀번호가 유효하지 않을때, 에러처리 */}
                    {/* {errors.password && (
                        <p className="text-sm text-red-600">
                            {errors.password.message as string}
                        </p>
                    )} */}

                    <button className="button color" type="submit">
                        In My Link 로그인
                    </button>
                    <Link href={ClientRoute.JOIN as string}>
                        <button className="button gray" type="submit">
                            In My Link 무료 회원가입
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
