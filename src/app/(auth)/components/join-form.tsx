'use client';

import { ClientRoute } from '@config/route';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useToken from 'store/useToken';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { joinFormSchema } from 'schemas/schema';
// import { JoinFormData } from 'types/auth';

export default function JoinForm() {
    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const setACToken = useToken((state) => state.setToken);

    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    // } = useForm<JoinFormData>({
    //     resolver: zodResolver(joinFormSchema),
    // });

    // async function handleRegister(data: JoinFormData) {
    //     setIsLoading(true);

    //     try {
    //         const response = await fetch('/api/user/add', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 name: data.name,
    //                 userId: data.userId,
    //                 password: data.password,
    //                 email: data.email,
    //             }),
    //         });

    //         const fetchData = await response.json();

    //         if (!response.ok) {
    //             alert('실패');
    //         } else {
    //             alert('성공');
    //             router.push('/login');
    //             return fetchData;
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    //     reset();
    // }

    async function handleJoin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name');
            const userId = formData.get('userId');
            const password = formData.get('password');
            const email = formData.get('email');

            const response = await fetch('/api/user/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formData,
                    name: name,
                    userId: userId,
                    password: password,
                    email: email,
                }),
            });
            const fetchData = await response.json();

            if (!response.ok) {
                alert('실패');
            } else {
                alert('성공');
                console.log(fetchData);
                const token = fetchData.data.token;
                localStorage.setItem('token', token);
                setACToken(token);
                router.push('/login');
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

                <form className="mt-8" onSubmit={handleJoin}>
                    <label htmlFor="name" className="title">
                        이름
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        // {...register('name')}
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        className="input mb-5"
                        placeholder="이름을 입력하세요."
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) =>
                            (e.target.placeholder = '이름을 입력하세요.')
                        }
                        onChange={(e) => setName(e.target.value)}
                    ></input>

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

                    {/* <label htmlFor="confirmPassword" className="title">
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
                        value={password}
                        className="input mb-5"
                        placeholder="********"
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) => (e.target.placeholder = '********')}
                        onChange={(data) => setPassword(data.target.value)}
                    ></input> */}

                    <label htmlFor="email" className="title">
                        이메일
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        // {...register('email')}
                        id="email"
                        name="email"
                        type="text"
                        value={email}
                        className="input mb-5"
                        placeholder="이메일을 입력하세요."
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) =>
                            (e.target.placeholder = '이메일을 입력하세요.')
                        }
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>

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
