'use client'
// import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import Link from "next/link"
import Modal from 'react-modal'
import StoCartItem from "@/app/slesarnyjRemont/stoCartItem";
import Map from '@/components/map';


export default function SlesarnyjRemont() {
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    overlay: {
       backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
       color: '#000000',
       minHeight: '50vh',
       minWidth: '600px',
       top: '50%',
       left: '50%',
       right: 'auto',
       bottom: 'auto',
       marginRight: '-50%',
       transform: 'translate(-50%, -50%)'
    }
  }
  
  const [isOpenMap, setIsOpenMap] = useState(true);
  const isOpenMapText = isOpenMap ? "Показать на карте" : "Скрыть карту";
  const isOpenMapListStyle = (isOpenMap ? "block " : "hidden ") + "directory-cart-item w-full bg-white text-black overflow-y-scroll md:block md:2/4 lg:2/4 xl:w-2/4 2xl:w-2/5";
  const isOpenMapStyle = (isOpenMap ? "hidden " : "block ") + "directory-cart-item w-full bg-slate-300 md:block md:w-2/4 lg:w-2/4 xl:w-2/4 2xl:w-3/5";


  return (
    <main className="directory-cart-item w-full flex flex-wrap flex-row md:flex-nowrap">

      <div className={isOpenMapListStyle}>
        <div className="flex flex-col gap-4 m-2.5 mb-8 mt-6 p-3 rounded bg-teal-400">
          <h1 className="text-3xl font-semibold">Ремонт и ТО в Великом Новгороде</h1>
          <div className="flex flex-row flex-wrap gap-2.5">
            <span className='active bg-white px-3 py-2 rounded border border-black border-solid hover:cursor-pointer'>Ремонт и ТО</span>
            <span className='bg-white px-3 py-2 rounded border border-black border-solid hover:cursor-pointer'>Кузовной ремонт</span>
            <span className='bg-white px-3 py-2 rounded border border-black border-solid hover:cursor-pointer'>Автомойки</span>
            <span className='bg-white px-3 py-2 rounded border border-black border-solid hover:cursor-pointer'>Шиномонтаж</span>
          </div>

          <div className="flex flex-row justify-between gap-2.5">
            <select className='filter-item px-3 py-2 rounded border border-black border-solid hover:cursor-pointer' name="mark-avto" id="mark-avto-select">
              <option value="">Марка авто</option>
              <option value="Audi">Audi</option>
              <option value="BAIC">BAIC</option>
              <option value="BMW">BMW</option>
              <option value="Belgee">Belgee</option>
              <option value="Cadillac">Cadillac</option>
              <option value="Changan">Changan</option>
            </select>
            <select className='filter-item px-3 py-2 rounded border border-black border-solid hover:cursor-pointer' name="model-avto" id="model-avto-select">
              <option value="">Модель авто</option>
              <option value="Alsvin I">Alsvin I</option>
              <option value="CS35 I">CS35 I</option>
              <option value="CS55 I">CS55 I</option>
            </select>
            <select className='filter-item px-3 py-2 rounded border border-black border-solid hover:cursor-pointer' name="year-avto" id="year-avto-select">
              <option value="">Год авто</option>
              <option value="Alsvin I">2018</option>
              <option value="CS35 I">2016</option>
              <option value="CS55 I">2015</option>
            </select>
          </div>

          <a href="#" className="w-full bg-white text-center block font-medium rounded border border-black border-solid px-5 py-2.5" onClick={() => setIsOpen(true)}>Укажите, что отремонтировать</a>
          <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
              <h1 className="text-2xl font-semibold text-center">Выбор, того что отремонтировать</h1>
              {/* <button onClick={() => setIsOpen(false)}>Close Modal</button> */}
          </Modal>

          <div className="flex flex-row flex-wrap gap-2.5">
            <span className='bg-white px-3 py-2 rounded border border-black border-solid hover:cursor-pointer'>Рядом</span>
            <span className='active bg-white px-3 py-2 rounded border border-black border-solid hover:cursor-pointer'>Сейчас открыто</span>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-between gap-2.5 m-2.5 mb-6">
          <StoCartItem />
          <StoCartItem />
          <StoCartItem />
          <StoCartItem />
          <StoCartItem />
          <StoCartItem />
          <StoCartItem />
          <StoCartItem />
          <StoCartItem />
          <StoCartItem />
          <StoCartItem />
        </div>
      </div>

      <div className="absolute w-full inset-x-0 bottom-0 bg-cyan-700 py-4 px-4 text-white text-center md:hidden" onClick={() => setIsOpenMap(!isOpenMap)}>{isOpenMapText}</div>
      <div className={isOpenMapStyle}>
        <Map />
      </div>
    </main>
  );
}
  