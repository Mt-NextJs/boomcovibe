'use client';

import { ClientRoute } from '@config/route';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useToken from 'store/useToken';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

const joinFormSchema = z.object({
    name: z
        .string({ required_error: '닉네임이 요구 됩니다.' })
        .min(4, { message: '닉네임은 최소 4글자 이상 입니다.' })
        .max(15, { message: '닉네임은 15글자를 넘길 수 없습니다' }),
    userId: z
        .string({ required_error: '아이디가 요구 됩니다.' })
        .min(4, { message: '아이디는 최소 4글자 이상 입니다.' })
        .max(15, { message: '아이디는 15글자를 넘길 수 없습니다' }),
    password: z
        .string({ required_error: '비밀번호가 요구 됩니다.' })
        .min(4, { message: '비밀번호는 최소 4글자 이상 입니다.' }),

    email: z.string().trim().email(),
});

type JoinForm = z.infer<typeof joinFormSchema>;

export default function JoinForm() {
    // const [name, setName] = useState('');
    // const [userId, setUserId] = useState('');
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<JoinForm>({
        resolver: zodResolver(joinFormSchema),
    });

    async function onSubmit(data: JoinForm) {
        try {
            const response = await fetch('/api/user/add', {
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
                alert('회원가입이 완료되었습니다! 로그인해주세요');
                console.log(fetchData);
                // consttoken = fetchData.data.token;
                // localStorage.setItem('token', token);
                // setAC Token(token);
                router.push('/login');
                return fetchData;
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    // async function handleJoin(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     setIsLoading(true);

    //     try {
    //         const formData = new FormData(e.currentTarget);
    //         const name = formData.get('name');
    //         const userId = formData.get('userId');
    //         const password = formData.get('password');
    //         const email = formData.get('email');

    //         const response = await fetch('/api/user/add', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 formData,
    //                 name: name,
    //                 userId: userId,
    //                 password: password,
    //                 email: email,
    //             }),
    //         });
    //         const fetchData = await response.json();

    //         if (!response.ok) {
    //             alert('실패');
    //         } else {
    //             alert('성공');
    //             console.log(fetchData);
    //             const token = fetchData.data.token;
    //             localStorage.setItem('token', token);
    //             setACToken(token);
    //             router.push('/login');
    //             return fetchData;
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

    return (
        <div>
            <div className="bg-white px-[25px] py-10">
                <h1 className="pageName text-primary-250">
                    In My Link 회원가입
                </h1>

                <div className="title">
                    <div className="mt-2 flex">
                        <p className="mr-2">이미 가입하셨나요 ?</p>
                        <Link href={ClientRoute.LOGIN as string}>
                            <p className="text-primary">로그인하기</p>
                        </Link>
                    </div>
                </div>

                <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name" className="title">
                        이름
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        {...register('name')}
                        id="name"
                        name="name"
                        type="text"
                        className="input mb-5"
                        placeholder="이름을 입력하세요."
                    ></input>

                    {errors.name && (
                        <p className="mb-3 text-sm text-red-600 dark:text-red-500">
                            {errors.name.message}
                        </p>
                    )}

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
                        className="input mb-5"
                        placeholder="********"
                    ></input>

                    {errors.password && (
                        <p className="mb-3 text-sm text-red-600 dark:text-red-500">
                            {errors.password.message}
                        </p>
                    )}

                    <label htmlFor="email" className="title">
                        이메일
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        {...register('email')}
                        id="email"
                        name="email"
                        type="text"
                        className="input mb-5"
                        placeholder="이메일을 입력하세요."
                    ></input>

                    {errors.email && (
                        <p className="mb-3 text-sm text-red-600 dark:text-red-500">
                            {errors.email.message}
                        </p>
                    )}

                    <button
                        className="button color"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? '회원가입...' : 'In My Link 가입완료'}
                    </button>
                </form>
            </div>
        </div>
    );
}
