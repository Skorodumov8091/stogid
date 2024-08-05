import Link from "next/link";

export default function StoGidUserAdreement(props: { buttonText: string; }) {
    return (
        <p className="w-full sm:w-2/3 text-center text-xs">Нажимая кнопку "{props.buttonText}" вы даете согласие на обработку своих персональных данных в соответствии с <Link className="text-cyan-700" href="/policy">политикой обработки персональных данных</Link></p>
    );
}