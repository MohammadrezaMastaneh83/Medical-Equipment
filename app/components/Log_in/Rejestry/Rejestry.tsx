'use client'
import Image from "next/image";
import style from "./Rejestry.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store/MedicalStore";
import { useState } from "react";
import { handleClose2, handleOpen2, loginName1 } from "@/app/store/MedicalSlice";
import axios from "axios";
export default function Rejestry() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const test = () => {
    axios
      .post(
        "https://meysamansari2023.serv00.net/api/register",
        {
          name: savename,
          family: "rezazade",
          middle_name: "mamad",
          email: email,
          phone_number: number,
          national_id: "0987656778",
          age: "21",
          gender: "male",
          marital_state: "single",
          education: "diploma",
          job: "worker",
          country: "iran",
          state: "tehran",
          city: "tehran",
          password: password,
          role: "seller",
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(handleClose2());
        console.log(loginName1);
        localStorage.setItem("userName", savename);
      })

      .catch((err) => console.log(err));
    const token = "your_token_here";
    localStorage.setItem("authToken", token);
    
    // fetch("https://meysamansari2023.serv00.net/api/register", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: "asqaaarr ",
    //     family: "rezazade",
    //     middle_name: "mamad",
    //     email: "mahanghvghvgh@gmail.com",
    //     phone_number: "09126745889",
    //     national_id: "0987656778",
    //     age: "21",
    //     gender: "male",
    //     marital_state: "single",
    //     education: "diploma",
    //     job: "worker",
    //     country: "iran",
    //     state: "tehran",
    //     city: "tehran",
    //     password:"123456",
    //     role: "seller",
    //   }),
    //   redirect: "follow",
    // })
    //   .then((res) => {
    //     res.json();
    //     () => dispatch(handleClose2());
    //   })

    //   .then((res) => console.log(res))
    //   .catch((err) => console.error("Error :", err));
  };
  const savename = useSelector(
    (state: RootState) => state.MedicalEquipment.name
  );
  console.log("kos",savename)
  const count = useSelector((state: RootState) => state.MedicalEquipment.open2);
  const dispatch = useDispatch();
  return (
    <div className={style.main_page}>
      <div className={style.sing_in_box}>
        <div className={style.top_page}>
          <div className={style.exit_btn}>
            <Image alt="" src="/add.svg" width={24} height={24}></Image>
          </div>
          <div className={style.logo}>
            <Image alt="" src="/LOGO 1.svg" width={181} height={129}></Image>
          </div>
        </div>
        <div className={style.body_page}>
          <div className={style.content_body}>
            <p>ایمیل</p>{" "}
            <input
              placeholder="ایمیل خود را وارد کنید"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className={style.content_body}>
            <p>نام مدیر عامل شرکت</p>
            <input
              placeholder="نام مدیر عامل شرکت خود را وارد کنید"
              value={savename}
             onChange={(e)=> dispatch (loginName1(e.target.value))}
            ></input>
          </div>
          <div className={style.content_body}>
            <p>شماره تلفن</p>
            <input
              placeholder="شماره تلفن خود را وارد کنید"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            ></input>
          </div>
          <div className={style.content_body}>
            <p>رمز عبور</p>
            <input
              placeholder= "رمز عبور خود را وارد کنید"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </div>

        <div className={style.register}>
          <button onClick={() => test()}>ثبت نام</button>
        </div>
        <div className={style.login_to_account}>
          <p className={style.register_log}>قبلا ثبت نام کردید؟</p>
          <p className={style.register_acc}>ورود به حساب کاربری</p>
        </div>
      </div>
    </div>
  );
}
