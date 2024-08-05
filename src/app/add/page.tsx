import StoGidButton from "@/components/forms/button";
import StoGidInput from "@/components/forms/input";
import StoGidTextarea from "@/components/forms/textarea";
import StoGidUserAdreement from "@/components/forms/userAgreement";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "СТОГИД - Добавить автосервис",
  // description: "Generated by create next app",
};

export default function Add() {
    return (
      <main className="flexh-full flex-col items-center justify-between bg-white text-black">
          <div className="container max-w-screen-lg mx-auto">
            <div className="h-min100-page w-full px-4 py-10 flex flex-col gap-4 gap-y-6">
              <h1 className="text-2xl font-semibold text-center">Добавить автосервис</h1>
              <form className="flex flex-col gap-2 gap-y-4 items-center">
                <StoGidInput id="stoName" type="text" name="stoName" label="Название" placeholder="Стогид" svg="name"/>
                <StoGidInput id="stoAddress" type="text" name="stoAddress" label="Адрес" placeholder="ул. Великая д. 53" svg="address"/>
                <StoGidInput id="stoPhone" type="tel" name="stoPhone" label="Телефон" placeholder="+7 (999) 999-99-99" svg="tel"/>
                <StoGidInput id="stoEmail" type="email" name="stoEmail" label="Эл. почта организации" placeholder="email@company.ru" svg="email"/>
                <StoGidInput id="stoSchedule" type="text" name="stoSchedule" label="Режим работы" placeholder="c 09.00 по 20.00" svg="time"/>
                <StoGidInput id="stoWebsite" type="text" name="stoWebsite" label="Сайт" placeholder="http://sto.ru" svg="site"/>
                <StoGidInput id="stoVK" type="text" name="stoVK" label="Вконтакте" placeholder="https://vk.com/sto" svg="vk"/>
                <StoGidTextarea id="stoDescription" name="description" label="Описание деятельности" placeholder="Пару слов о Вашей деятельности" />
                <StoGidButton text="Добавить" />
                <StoGidUserAdreement buttonText="Добавить" />
              </form>
            </div>
          </div>     
      </main>
    );
  }
  