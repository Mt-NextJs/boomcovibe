export default function Menu() {
    return (
        <ul className="absolute -bottom-8 right-5 z-10 w-fit overflow-hidden rounded-lg border border-gray-300 bg-white text-center shadow-xl">
            <li className="border-b border-gray-300 p-2 hover:bg-gray-50">
                <button className="w-full">상단에 고정</button>
            </li>
            <li className="border-b border-gray-300 p-2 hover:bg-gray-50">
                <button className="w-full">보관</button>
            </li>
            <li className="p-2 hover:bg-gray-100">
                <button className="w-full">삭제</button>
            </li>
        </ul>
    );
}
