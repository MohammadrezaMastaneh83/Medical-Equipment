"use client";
import { useState } from "react";
import style from "./list.module.css";
import { url } from "inspector";
import Image from "next/image";
import Product_List from "./productlist/productlist";
import CompanyInformation from "./Phone numbers and names of medical equipment companies/Company information";
import BossInformation from "./Boss information/Boss information";
import MedicalOccasions from "./Medical occasions/Medical occasions";
import Information_Hospital from "./Informathio of hospitale/Information of hospital";
import Laboratory from "./laboratory/laboratory";
import Assistance from "./Assistance informathion/Assistance"
import Websit from "./websit/websit";
const listItems = [
  "لیست دستگاه های تجهیزات پزشکی",
  "تلفن و نام شرکت های تجهیزات پزشکی",
  "نام و تلفن ریاست دانشگاه علوم پزشکی",
  "مناسبت های پزشکی",
  "مشخصات بیمارستان های سراسر کشور",
  "اداره امور آزمایشگاه ها",
  "تلفن و نام معاونت درمان دانشگاه های علوم پزشکی",
  "سایت های دانشگاه علوم پزشکی",
];

export default function List_of_Medical_Equipment() {
  const [state, setState] = useState<
    | "لیست دستگاه های تجهیزات پزشکی"
    | "تلفن و نام شرکت های تجهیزات پزشکی"
    | "نام و تلفن ریاست دانشگاه علوم پزشکی"
    | "مناسبت های پزشکی"
    | "مشخصات بیمارستان های سراسر کشور"
    | "اداره امور آزمایشگاه ها"
    | "تلفن و نام معاونت درمان دانشگاه های علوم پزشکی"
    | "سایت های دانشگاه علوم پزشکی"
  >("لیست دستگاه های تجهیزات پزشکی");
  return (
    <div className={style.list_all}>
      <div className={style.list_box}>
        <p className={style.list_h1}>
          لطفا دسته بندی مربوطه خود را انتخاب کنید.
        </p>
        <div className={style.list_move_box}>
          {listItems.map((item, index) => (
            <button
              key={index}
              className={style.list_move_btn1}
              style={
                state === item
                  ? {
                      color: "#2C9CF0",
                      backgroundColor: "rgba(44, 156, 240, 0.05)",
                      border: "1.3px solid var(--Primary-Color, #2C9CF0)",
                    }
                  : {}
              }
              onClick={() => {
                setState(item as any);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div
        className={style.list_bluebox}
        style={{ backgroundImage: "url(/baner.png)" }}
      >
        <div className={style.list_bluebox_move}>
          <div className={style.list_btn_move}>
            <button className={style.list_bluebox_btn}>مشاهده سایت</button>
          </div>
          <div className={style.list_bluebox_pic_move}>
            <Image alt="" src="/trothy.svg" width={165} height={300} />
          </div>
        </div>
      </div>
      <div className={style.list_componenet}>
        {state === "لیست دستگاه های تجهیزات پزشکی" ? (
          <Product_List />
        ) : state === "تلفن و نام شرکت های تجهیزات پزشکی" ? (
          <CompanyInformation />
        ) : state === "نام و تلفن ریاست دانشگاه علوم پزشکی" ? (
          <BossInformation />
        ) : state === "مناسبت های پزشکی" ? (
          <MedicalOccasions />
        ) : state === "مشخصات بیمارستان های سراسر کشور" ? (
          <Information_Hospital />
        ) : state === "اداره امور آزمایشگاه ها" ? (
          <Laboratory />
        ) : state === "تلفن و نام معاونت درمان دانشگاه های علوم پزشکی" ? (
            <Assistance/>
            ): state === "سایت های دانشگاه علوم پزشکی" ? (
            <Websit/>
            ):(<></>)
            
        }
      </div>
    </div>
  );
}
