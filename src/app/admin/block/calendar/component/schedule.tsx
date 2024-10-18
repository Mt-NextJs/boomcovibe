import React from "react";

export default function Schedule({ flag }: { flag: number }) {
  return (
    <>
      {flag === 2 ? (
        <>
          <section className="flex w-full gap-1 h-40 justify-center cursor-default mb-4">
            <div className="flex w-5/6 gap-6 h-20 items-center cursor-default">
              <div className="w-24 h-16 relative">
                <div className="w-20 absolute h-8 left-[50%] transform translate-x-[-50%] flex justify-center">
                  <div className="relative flex items-center justify-center w-16 h-full rounded-lg bg-gray-100 after:content-[''] after:absolute after:bg-gray-100 after:aspect-square after:h-6 after:transform  after:right-[-12%] after:rounded-lg after:rotate-45 after:z-[-1]">
                    <p className="px-1 h-fit text-xs font-bold text-primary-450">
                      CLOSED
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[21rem] h-20 flex flex-col justify-evenly transform">
                <p className="truncate text-sm text-gray-400">
                  10.14(오전 10시) ~ 10.18(오후 6시)
                </p>
                <p className="truncate font-bold underline">
                  [SAMPLE] 첫 번째 일정 예시
                </p>
              </div>
            </div>
            <div className="flex flex-col w-1/6 h-40 gap-4 justify-evenly items-center">
              <button className="bg-gray-200 hover:bg-gray-400 font-bold py-3.5 px-5 rounded-xl">
                수정
              </button>
              <button className="bg-red-100 hover:bg-red-300 text-red-500 font-bold py-3.5 px-5 rounded-xl">
                삭제
              </button>
            </div>
          </section>
          <div className="w-full border-1 my-4"></div>
          <section className="flex w-full gap-1 h-40 justify-center cursor-default mb-4">
            <div className="flex w-5/6 gap-6 h-20 items-center cursor-default">
              <div className="w-24 h-16 relative">
                <div className="w-20 absolute h-8 left-[50%] transform translate-x-[-50%] flex justify-center">
                  <div className="relative flex items-center justify-center w-16 h-full rounded-lg bg-gray-100 after:content-[''] after:absolute after:bg-gray-100 after:aspect-square after:h-6 after:transform  after:right-[-12%] after:rounded-lg after:rotate-45 after:z-[-1]">
                    <p className="px-1 h-fit text-xs font-bold text-primary-450">
                      SOON
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[21rem] h-20 flex flex-col justify-evenly transform">
                <p className="truncate text-sm text-gray-400">
                  10.14(오전 10시) ~ 10.18(오후 6시)
                </p>
                <p className="truncate font-bold underline">
                  [SAMPLE] 첫 번째 일정 예시
                </p>
              </div>
            </div>
            <div className="flex flex-col w-1/6 h-40 gap-4 justify-evenly items-center">
              <button className="bg-gray-200 hover:bg-gray-400 font-bold py-3.5 px-5 rounded-xl">
                수정
              </button>
              <button className="bg-red-100 hover:bg-red-300 text-red-500 font-bold py-3.5 px-5 rounded-xl">
                삭제
              </button>
            </div>
          </section>
          <div className="w-full border-1 my-4"></div>
        </>
      ) : (
        <section className="flex w-full gap-1 h-20 justify-center cursor-default">
          <div className="w-24 h-16 relative">
            <div className="w-20 absolute h-8 left-[50%] transform translate-x-[-50%] flex justify-center">
              <div className="relative flex items-center justify-center w-16 h-full rounded-lg bg-gray-100 after:content-[''] after:absolute after:bg-gray-100 after:aspect-square after:h-6 after:transform  after:right-[-12%] after:rounded-lg after:rotate-45 after:z-[-1]">
                <p className="px-1 h-fit text-xs font-bold text-primary-450">
                  SOON
                </p>
              </div>
            </div>
          </div>
          {flag === 1 ? (
            <div className="relative mx-1 border-1 transform translate-y-[15%] h-[110%]">
              <div className="absolute w-2 h-2 rounded-full bg-primary-450 transform translate-x-[-50%] translate-y-[-10%]"></div>
            </div>
          ) : null}
          <div className="w-[21rem] flex flex-col justify-evenly transform translate-y-[-5%]">
            <p className="truncate text-sm text-gray-400">
              10.14(오전 10시) ~ 10.18(오후 6시)
            </p>
            <p className="truncate font-bold underline">
              [SAMPLE] 첫 번째 일정 예시
            </p>
          </div>
        </section>
      )}
    </>
  );
}
