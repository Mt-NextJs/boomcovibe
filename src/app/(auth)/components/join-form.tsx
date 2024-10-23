'use client';

import { ClientRoute } from '@config/route';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { joinFormSchema } from 'schemas/schema';
import { JoinFormData } from 'types/auth';

export default function JoinForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<JoinFormData>({
        resolver: zodResolver(joinFormSchema),
    });

    async function handleRegister(data: JoinFormData) {
        console.log(data);
        reset();
    }

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

                <form className="mt-8" onSubmit={handleSubmit(handleRegister)}>
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
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) =>
                            (e.target.placeholder = '이름을 입력하세요.')
                        }
                    ></input>

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
                        {...register('password')}
                        id="password"
                        name="password"
                        type="password"
                        className="input mb-5"
                        placeholder="********"
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) => (e.target.placeholder = '********')}
                    ></input>

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
                        onBlur={(e) => (e.target.placeholder = '********')}
                    ></input>

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
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) =>
                            (e.target.placeholder = '이메일을 입력하세요.')
                        }
                    ></input>

                    <button className="button color" type="submit">
                        In My Link 가입완료
                    </button>
                </form>
            </div>
        </div>
    );
}
