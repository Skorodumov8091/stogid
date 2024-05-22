import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white w-full text-black py-4 border-t border-cyan-700 border-solid">
            <div className="flex items-center justify-between gap-x-4 gap-y-1 px-4">
                <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
                    <Link href="/add" className="">Добавить место</Link>
                    <Link href="/contacts" className="">Контакты</Link>
                    <Link href="/cities" className="">Города</Link>
                </div>
                <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
                    <Link href="/rules" className="">Пользовательское соглашение</Link>
                    <Link href="/policy" className="">Политика обработки персональных данных</Link>
                </div>
            </div>
        </footer>
    );
}