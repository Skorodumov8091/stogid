'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import "../../../styles/slick-theme.min.css"
import "../../../styles/slick.min.css"
import Slider from "react-slick";
import StoStar from '../stoStar';
import StoAddress from '../stoAddress';
import StoCartItemTime from '../stoCartItemTime';
import StoIcons from '../stoIcons';
import StoCartItem from '../stoCartItem';
import StoReview from './stoReview';
import Map from '../../../components/map'
import StoPromotion from './stoPromotion';

export default function LimuzinAvto() {
  const [isOpenMap, setIsOpenMap] = useState(true);
  const isOpenMapText = isOpenMap ? "Показать на карте" : "Скрыть карту";
  const isOpenMapListStyle = (isOpenMap ? "block " : "hidden ") + "directory-cart-item w-full bg-white text-black overflow-y-scroll md:block md:2/4 lg:2/4 xl:w-2/4 2xl:w-2/4";
  const isOpenMapStyle = (isOpenMap ? "hidden " : "block ") + "directory-cart-item w-full bg-slate-300 md:block md:w-2/4 lg:w-2/4 xl:w-2/4 2xl:w-2/4";

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <main className="directory-cart-item w-full flex flex-row">
      <div className={isOpenMapListStyle}>
        <div className='flex flex-col gap-2 m-2.5 mb-8 mt-6'>
          <h1 className="text-3xl font-semibold">Лимузин-Авто</h1>
          <div className='flex flex-col justify-between gap-2 md:flex-row'>
            <div className='flex flex-col gap-2 m-2.5 mb-8 mt-6'>
              <StoStar />
              <div className="flex flex-row gap-2">
                <svg className="w-5 h-5" viewBox="0 0 74 74" xmlns="http://www.w3.org/2000/svg">
                  <path d="m56.74 71a27.42 27.42 0 0 1 -10.37-2.54c-7.53-3.2-15.97-9.06-23.77-16.46s-14.04-15.66-17.6-23c-3.67-7.7-4-13.7-.91-16.93l7.4-7.75c2-2.13 5.75-1.89 8.29.54l11.22 10.7a7 7 0 0 1 2.16 4.13 4.88 4.88 0 0 1 -1.25 4.12l-5.64 5.91c-1.2 1.26.62 6.36 6.31 11.8a27.62 27.62 0 0 0 7.76 5.41c2 .86 3.7 1 4.32.36l5.65-5.91c2-2.13 5.75-1.89 8.28.53l11.2 10.7a7.09 7.09 0 0 1 2.17 4.13 4.91 4.91 0 0 1 -1.25 4.12l-7.4 7.75a8.69 8.69 0 0 1 -6.57 2.39zm-41.68-66.14a2.89 2.89 0 0 0 -2.13.84l-7.39 7.75c-2.44 2.55-1.97 7.89 1.28 14.65 3.44 7.16 9.54 15.11 17.18 22.4s15.86 13 23.17 16.12c6.9 2.94 12.26 3.16 14.69.61l7.41-7.75a3 3 0 0 0 .73-2.48 5.06 5.06 0 0 0 -1.57-2.94l-11.2-10.7c-1.74-1.66-4.19-1.93-5.46-.6l-5.65 5.91c-1.27 1.32-3.59 1.35-6.55.1a29.56 29.56 0 0 1 -8.39-5.77c-5.18-5-9.18-11.76-6.38-14.66l5.65-5.91a3 3 0 0 0 .71-2.49 5 5 0 0 0 -1.57-2.94l-11.2-10.7a4.93 4.93 0 0 0 -3.33-1.44z"></path>
                  <path d="m67.64 63.61a1 1 0 0 1 -.69-.28l-18.95-18.1a1 1 0 0 1 1.38-1.45l19 18.11a1 1 0 0 1 0 1.41 1 1 0 0 1 -.74.31z"></path>
                  <path d="m28.84 26.55a1 1 0 0 1 -.69-.27l-18.96-18.11a1 1 0 0 1 1.38-1.45l19 18.11a1 1 0 0 1 0 1.41 1 1 0 0 1 -.73.31z"></path>
                </svg>
                <a href="tel:+79999999999">+7 (999) 999-99-99</a>
              </div>
              <div className="flex flex-row gap-2">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path d="M21,17.24a1,1,0,0,0,1.68.47L24,16.41c1.41,1.41,1.59,1.74,2.27,1.55s.64-.49,1.7-4.72A1,1,0,0,0,26,12.76L25.46,15l-.75-.75a1,1,0,0,0-1.42,0l-.75.75L22,12.76a1,1,0,0,0-1.94.48Z"></path>
                  <path d="M30,17.24a1,1,0,0,0,1.68.47L33,16.41c1.41,1.41,1.59,1.74,2.27,1.55s.64-.49,1.7-4.72A1,1,0,0,0,35,12.76L34.46,15l-.75-.75a1,1,0,0,0-1.42,0l-.75.75L31,12.76a1,1,0,0,0-1.94.48Z"></path>
                  <path d="M12,17.24a1,1,0,0,0,1.68.47L15,16.41c1.41,1.41,1.59,1.74,2.27,1.55s.64-.49,1.7-4.72A1,1,0,0,0,17,12.76L16.46,15l-.75-.75a1,1,0,0,0-1.42,0l-.75.75L13,12.76a1,1,0,0,0-1.94.48Z"></path>
                  <path d="M42,11H41V10a2,2,0,0,0-2-2H37.26A15,15,0,0,0,10.74,8H9a2,2,0,0,0-2,2v1H6a3,3,0,0,0-3,3V38a3,3,0,0,0,3,3H19.85l-.72,5H17a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2H28.87l-.72-5H42a3,3,0,0,0,3-3V14A3,3,0,0,0,42,11ZM34.94,8H31.1a16.2,16.2,0,0,0-2.27-5A13,13,0,0,1,34.94,8ZM19,8c.93-3.06,2.41-5.17,4-5.8V8Zm6-5.8c1.61.63,3.09,2.74,4,5.8H25ZM19.17,3A16.2,16.2,0,0,0,16.9,8H13.06A13,13,0,0,1,19.17,3ZM9,10H39V20H9ZM29,22c-.93,3.06-2.41,5.17-4,5.8V22ZM16.9,22a16.2,16.2,0,0,0,2.27,5.05A13,13,0,0,1,13.06,22ZM19,22h4v5.8C21.39,27.17,19.91,25.06,19,22ZM31.1,22h3.84a13,13,0,0,1-6.11,5.05A16.2,16.2,0,0,0,31.1,22ZM5,14a1,1,0,0,1,1-1H7v7a2,2,0,0,0,2,2h1.74a15,15,0,0,0,26.52,0H39a2,2,0,0,0,2-2V13h1a1,1,0,0,1,1,1V35H5ZM26.85,46h-5.7l.72-5h4.26ZM43,38a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V37H43Z"></path>
                </svg>
                <a href="http://topmedia53.ru/" target="_blank">avtoservis.nov.ru</a>
              </div>
              <StoAddress />
              <StoCartItemTime />
              <StoIcons />
            </div>
            <Image
                src="/company-demo.jpg"
                width={300}
                height={300}
                alt="Лимузин-Авто"
                className='rounded-t'
            />
          </div>
          <div className="mt-6">
            <h2 className='text-2xl w-max font-semibold border-b-2 border-gray-200 border-solid mb-3'>О компании</h2>
            <div className='leading-normal'>
              Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32
            </div>
          </div>

          <div className="mt-6">
            <h2 className='text-2xl w-max font-semibold border-b-2 border-gray-200 border-solid mb-3'>Акции</h2>
            <Slider {...settings} className='competitors-slider'>
              <StoPromotion />
              <StoPromotion />
              <StoPromotion />
              <StoPromotion />
              <StoPromotion />
            </Slider>
          </div>

          <div className="mt-6">
            <h2 className='text-2xl w-max font-semibold border-b-2 border-gray-200 border-solid mb-3'>Отзывы</h2>
            <Slider {...settings} className='competitors-slider'>
              <StoReview />
              <StoReview />
              <StoReview />
              <StoReview />
            </Slider>
          </div>

          <div className="mt-6">
            <h2 className='text-2xl w-max font-semibold border-b-2 border-gray-200 border-solid mb-3'>Конкуренты</h2>
            <Slider {...settings} className='competitors-slider'>
              <StoCartItem />
              <StoCartItem />
              <StoCartItem />
              <StoCartItem />
            </Slider>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-cyan-700 w-full text-white py-4 px-4 text-center md:hidden" onClick={() => setIsOpenMap(!isOpenMap)}>{isOpenMapText}</div>
      <div className={isOpenMapStyle}>
        <Map />
      </div>
    </main>
  );
}
  