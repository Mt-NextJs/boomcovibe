'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AuthForm({ type }: { type: string }) {
    const [user, setUser] = useState(null);

    return (
        <div>
            <div className="bg-white px-[25px] py-10">
                {user ? (
                    'Account'
                ) : type === 'login' ? (
                    <>
                        <div className="relative mb-5 cursor-pointer">
                            <Link href={'/'}>
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
                                <Link href={'/login'}>
                                    <p className="text-orange-400">
                                        로그인하기
                                    </p>
                                </Link>
                            </div>
                        </>
                    )}
                </div>

                <form className="mt-8">
                    <label htmlFor="id" className="title">
                        아이디
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        id="id"
                        type="email"
                        className="input mb-5"
                        placeholder="아이디를 입력하세요."
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) =>
                            (e.target.placeholder = '아이디를 입력하세요.')
                        }
                    ></input>

                    <label htmlFor="password" className="title">
                        비밀번호
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="input mb-5"
                        placeholder="********"
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) => (e.target.placeholder = '********')}
                    ></input>

                    {user ? (
                        'Account'
                    ) : type === 'login' ? (
                        ''
                    ) : (
                        <>
                            {' '}
                            <label htmlFor="confirm" className="title">
                                비밀번호 확인
                                <span className="title relative top-1 ml-2 inline-block text-red-500">
                                    *
                                </span>
                            </label>
                            <input
                                id="confirm"
                                type="password"
                                className="input mb-5"
                                placeholder="********"
                                onFocus={(e) => (e.target.placeholder = '')}
                                onBlur={(e) =>
                                    (e.target.placeholder = '********')
                                }
                            ></input>
                            <label htmlFor="email" className="title">
                                이메일
                                <span className="title relative top-1 ml-2 inline-block text-red-500">
                                    *
                                </span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="input mb-5"
                                placeholder="mylink@boomco.com"
                                onFocus={(e) => (e.target.placeholder = '')}
                                onBlur={(e) =>
                                    (e.target.placeholder = 'mylink@boomco.com')
                                }
                            ></input>
                        </>
                    )}

                    {user ? (
                        'Account'
                    ) : type === 'login' ? (
                        <>
                            <button className="button color" type="submit">
                                In My Link 로그인
                            </button>
                            <Link href={'/join'}>
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
