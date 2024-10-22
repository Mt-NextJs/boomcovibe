import Image from 'next/image';
import Link from 'next/link';
import BlockStack from '@components/main-stack';
import { ClientRoute } from '@config/route';

export default function Intro() {
    return (
        <div className="flex h-dvh flex-col justify-between bg-primary-100 py-[20%]">
            <div className="flex h-full items-center">
                <div className="flex w-full items-center gap-[2rem]">
                    <BlockStack />
                    <div className="flex w-[12rem] flex-col justify-center gap-[1rem]">
                        <div className="logo-desc text-foreground w-full text-xl">
                            <div className="transform text-left transition duration-500 hover:translate-x-2 hover:text-red-300">
                                블록으로
                            </div>
                            <div className="transform text-center transition duration-500 hover:scale-105 hover:text-red-300">
                                표현하는
                            </div>
                        </div>
                        <div className="logo-inmylink w-full text-center">
                            <div className="text-foreground p-2 text-2xl font-extrabold tracking-wider duration-500 hover:scale-105 hover:text-red-300">
                                인마이링크
                            </div>
                            <div className="text-lg text-primary-250">
                                In My Link
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loginButtons absolute bottom-[10%] flex min-w-[25rem] flex-col items-center gap-[2rem] self-center">
                <Link
                    href={ClientRoute.LOGIN as string}
                    className={'button color'}
                >
                    시작하기
                </Link>
            </div>
        </div>
    );
}
