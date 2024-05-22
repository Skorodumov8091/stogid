import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
        <div className="container max-w-screen-lg mx-auto">
          <div className="directory-item w-full px-4 flex flex-col gap-4 justify-center">
            <h1 className="text-2xl font-semibold text-white">Поиск автосервиса и запись онлайн в г. Великий Новгород</h1>
            <form className="flex">
              <div className="relative w-full">
                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300" placeholder="Поиск" required />
                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-red-700 rounded-e-lg border border-red-700">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                  <span className="sr-only">Поиск</span>
                </button>
              </div>
            </form>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white">
              <Link href="/slesarnyjRemont" className="">Слесарный ремонт</Link>
              <Link href="#" className="">Кузовной ремонт</Link>
              <Link href="#" className="">Автомойка</Link>
              <Link href="#" className="">Шиномонтаж</Link>
              <Link href="/category" className="">ещё...</Link>
            </div>
          </div>
        </div>
    </main>
  );
}
