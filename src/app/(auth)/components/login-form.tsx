'use client';

import { ClientRoute } from '@config/route';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useToken from 'store/useToken';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginFormSchema = z.object({
    userId: z
        .string({ required_error: '아이디가 요구 됩니다.' })
        .min(4, { message: '아이디는 최소 4글자 이상 입니다.' })
        .max(15, { message: '아이디는 15글자를 넘길 수 없습니다' }),
    password: z
        .string({ required_error: '비밀번호가 요구 됩니다.' })
        .min(4, { message: '비밀번호는 최소 4글자 이상 입니다.' }),
});

type LoginForm = z.infer<typeof loginFormSchema>;

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const setACToken = useToken((state) => state.setToken);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: zodResolver(loginFormSchema),
    });

    async function onSubmit(data: LoginForm) {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
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

                <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="userId" className="title">
                        아이디
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        {...register('userId')}
                        id="userId"
                        name="userId"
                        type="text"
                        className="input mb-5"
                        placeholder="아이디를 입력하세요."
                    ></input>

                    {errors.userId && (
                        <p className="mb-3 text-sm text-red-600 dark:text-red-500">
                            {errors.userId.message}
                        </p>
                    )}

                    <label htmlFor="password" className="title">
                        비밀번호
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        {...register('password')}
                        id="password"
                        name="password"
                        type="password"
                        // value={password}
                        className="input mb-5"
                        placeholder="********"
                    ></input>

                    {errors.password && (
                        <p className="mb-3 text-sm text-red-600 dark:text-red-500">
                            {errors.password.message}
                        </p>
                    )}

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
