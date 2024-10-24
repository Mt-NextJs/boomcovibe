import Image from 'next/image';
import Link from 'next/link';
import BlockStack from '@components/main-stack';
import { ClientRoute } from '@config/route';
import BlockLogo from '@components/main-logo';

export default function Intro() {
    return (
        <div className="flex h-dvh flex-col bg-primary-100 py-[20%]">
            <div className="flex h-full items-center">
                <div className="grid grid-cols-2">
                    <BlockStack />
                    <div className="z-30 grid grid-flow-col grid-rows-2 gap-4">
                        <div className="logo-desc text-foreground w-full pr-2 text-xl">
                            <Image
                                src="/assets/icons/main1.png"
                                alt="블록으로"
                                width={694}
                                height={163}
                            />
                            <div className="flex flex-col">
                                <Image
                                    src="/assets/icons/main2.png"
                                    alt="표현하는"
                                    width={700}
                                    height={400}
                                />
                                <BlockLogo />
                            </div>
                        </div>
                        <div className="logo-inmylink text-center">
                            <div>
                                <Image
                                    src="/assets/icons/main3.png"
                                    alt="인마이링크"
                                    width={700}
                                    height={400}
                                />
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
