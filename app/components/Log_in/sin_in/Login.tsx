"use client"
import Image from "next/image";
import style from "./Login.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store/MedicalStore";
import {
  handleClose,
  handleClose2,
  handleOpen,
  handleOpen2,
} from "@/app/store/MedicalSlice";
import Backdrop from "@mui/material/Backdrop";
import Rejestry from "../Rejestry/Rejestry";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const savename = useSelector(
    (state: RootState) => state.MedicalEquipment.name
  );

  // logout
  // const token = localStorage.getItem("token")
  
  const count2 = useSelector((state: RootState) => state.MedicalEquipment.open2);
  const count = useSelector((state: RootState) => state.MedicalEquipment.open);
  
  const dispatch = useDispatch();
  // const fetchData = () => {
  //   axios.post("https://meysamansari2023.serv00.net/api/login", {
  //     email,
  //     password
  //   }).then(res=>{
  //     console.log(res)
  //     const token=res.token

  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // };
  const test = () => {
    fetch("https://meysamansari2023.serv00.net/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        // logout
        // Authorization: token
      },
      body: JSON.stringify({
        email ,
        password ,
      }),
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token)
        console.log(res.token)
        dispatch(handleClose())
        //  let ali = [...Api]
        const userName = typeof window !== 'undefined' ?  localStorage.getItem("userName") : null
         

        // logout
        // localStorage.removeItem("token")
      })
      .catch((err) => console.error("Error :", err));
  };

  return (
    <div className={style.main_page2}>
      <div className={style.login_box}>
        <div className={style.void_1}></div>
        <div className={style.top_page2}>
          <div
            className={style.exit_btn2}
            onClick={() => dispatch(handleClose())}
          >
            <Image alt="" src="/add.svg" width={24} height={24}></Image>
          </div>
          <div className={style.logo2}>
            <Image alt="" src="/LOGO 1.svg" width={181} height={129}></Image>
          </div>
        </div>
        <div className={style.void_2}></div>
        <div className={style.body_page2}>
          <div className={style.content_body2}>
            <p>نام کاربری</p>
            <input
              placeholder="ایمیل خود را وارد کنید"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            ></input>
          </div>
          <div className={style.content_body2}>
            <p>رمز عبور</p>
            <input
              placeholder="رمز عبور خود را وارد کنید"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className={style.void_3}></div>
        <div className={style.register2}>
          <button onClick={test}>ورود</button>
        </div>
        <div className={style.forget_pass}>
          <Link
            style={{
              textDecoration: "none",
              color: "#2c9cf0",
              width: 400,
              height: 45,
            }}
            href="/Forgetpass"
          >
            <button>فراموشی رمز عبور</button>
          </Link>
        </div>
        <div className={style.login_to_account2}>
          <p className={style.register_log2}>آیا حساب کاربری ندارید؟</p>
          <Link style={{ textDecoration: "none" }} href="/">
            <div
              className={style.register_acc2}
              onClick={() => dispatch(handleOpen2())}
            >
              ساخت حساب کاربری
            </div>
          </Link>
          <Backdrop
            onClick={() => dispatch(handleClose2())}
            sx={{ color: "blue", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={count2}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <Rejestry />
            </div>
          </Backdrop>
        </div>
      </div>
    </div>
  );
}
