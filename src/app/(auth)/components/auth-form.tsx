'use client';

import { ClientRoute } from '@config/route';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerFormSchema } from 'schemas/schema';
import { RegisterFormData } from 'types/auth';

export default function AuthForm({ type }: { type: string }) {
    const [user, setUser] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema),
    });

    async function handleRegister(data: RegisterFormData) {
        console.log(data);
        reset();
    }

    return (
        <div>
            <div className="bg-white px-[25px] py-10">
                {user ? (
                    'Account'
                ) : type === 'login' ? (
                    <>
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
                    </>
                ) : (
                    <></>
                )}

                <h1 className="pageName">
                    {user
                        ? 'Account'
                        : type === 'login'
                          ? 'In My Link 로그인'
                          : 'In My Link 회원가입'}
                </h1>

                <div className="title">
                    {user ? (
                        'Account'
                    ) : type === 'login' ? (
                        ''
                    ) : (
                        <>
                            <div className="mt-2 flex">
                                <p className="mr-2">이미 가입하셨나요 ?</p>
                                <Link href={ClientRoute.LOGIN as string}>
                                    <p className="text-orange-400">
                                        로그인하기
                                    </p>
                                </Link>
                            </div>
                        </>
                    )}
                </div>

                <form className="mt-8" onSubmit={handleSubmit(handleRegister)}>
                    <label htmlFor="id" className="title">
                        아이디
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        {...register('id')}
                        id="id"
                        name="id"
                        type="text"
                        className="input mb-5"
                        placeholder="아이디를 입력하세요."
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) =>
                            (e.target.placeholder = '아이디를 입력하세요.')
                        }
                    ></input>
                    {/* Login, Join에서 아이디가 유효하지 않을때, 에러처리 */}
                    {errors.id && (
                        <p className="text-sm text-red-600">
                            {errors.id.message as string}
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
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) => (e.target.placeholder = '********')}
                    ></input>
                    {/* Login, Join에서 비밀번호가 유효하지 않을때, 에러처리 */}
                    {errors.password && (
                        <p className="text-sm text-red-600">
                            {errors.password.message as string}
                        </p>
                    )}

                    {user ? (
                        'Account'
                    ) : type === 'login' ? (
                        ''
                    ) : (
                        <>
                            {' '}
                            <label htmlFor="confirmPassword" className="title">
                                비밀번호 확인
                                <span className="title relative top-1 ml-2 inline-block text-red-500">
                                    *
                                </span>
                            </label>
                            <input
                                {...register('confirmPassword')}
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                className="input mb-5"
                                placeholder="********"
                                onFocus={(e) => (e.target.placeholder = '')}
                                onBlur={(e) =>
                                    (e.target.placeholder = '********')
                                }
                            ></input>
                            {/* Join에서 비밀번호 확인 부분에서 일치하지 않을때, 에러처리 */}
                            {errors.confirmPassword && (
                                <p className="text-sm text-red-600">
                                    {errors.confirmPassword.message as string}
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
                                placeholder="mylink@boomco.com"
                                onFocus={(e) => (e.target.placeholder = '')}
                                onBlur={(e) =>
                                    (e.target.placeholder = 'mylink@boomco.com')
                                }
                            ></input>
                            {/* Join에서 이메일이 유효하지 않을때, 에러처리 */}
                            {errors.email && (
                                <p className="text-sm text-red-600">
                                    {errors.email.message as string}
                                </p>
                            )}
                        </>
                    )}

                    {user ? (
                        'Account'
                    ) : type === 'login' ? (
                        <>
                            <button className="button color" type="submit">
                                In My Link 로그인
                            </button>
                            <Link href={ClientRoute.JOIN as string}>
                                <button className="button gray" type="submit">
                                    In My Link 무료 회원가입
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <button className="button color" type="submit">
                                In My Link 가입완료
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}
