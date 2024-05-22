import Image from 'next/image'

export default function StoPromotion() {
    return ( 
        <div className="mr-2.5 rounded border border-gray-200 border-solid">
            <Image
                src="/stock-demo.jpg"
                width={500}
                height={500}
                alt="Акция - Развал схождение"
                className='rounded-t'
            />
            <div className='p-3 text-center font-medium text-lg'>Развал – схождение от 1 600 рублей</div>
        </div>
    );
}