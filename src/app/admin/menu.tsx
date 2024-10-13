export default function Menu() {
    return (
        <ul className="absolute -bottom-12 right-5 z-10 w-fit rounded-lg bg-white text-center shadow-lg">
            <li className="border-b border-gray-300 p-2 hover:bg-gray-50">
                <button className="">상단에 고정</button>
            </li>
            <li className="border-b border-gray-300 px-4 py-2 hover:bg-gray-50">
                <button className="">보관</button>
            </li>
            <li className="p-2 hover:bg-gray-100">
                <button className="">삭제</button>
            </li>
        </ul>
    );
}
