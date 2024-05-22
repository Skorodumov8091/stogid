import Link from "next/link";
import StoIcons from "./stoIcons";
import StoStar from "./stoStar";
import StoAddress from "./stoAddress";
import StoCartItemTime from "./stoCartItemTime";

export default function StoCartItem() {
    return (    
        <div className="catalog-item p-3 rounded border border-gray-200 border-solid">
            <Link href="/slesarnyjRemont/limuzinAvto" className="flex flex-col gap-1">
                <h2 className="text-cyan-700 text-2xl font-semibold">Лимузин-Авто</h2>
                <StoIcons />
                <p>Категория</p>
                <StoStar />
                <StoAddress />
                <StoCartItemTime />
            </Link>
            </div>
    );
}