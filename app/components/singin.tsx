import Image from "next/image";
import "../../styles/singin.css";
import Link from "next/link";

export default function SingIn() {
  return (
    <div className="main_page">
      <div className="sing_in_box">
        <div className="void"></div>
        <div className="top_page">
          <div className="exit_btn">
            <Image alt="" src="/add.svg" width={24} height={24}></Image>
          </div>
          <div className="logo">
            <Image alt="" src="/LOGO1.svg" width={181} height={129}></Image>
          </div>
        </div>
        <div className="body_page">
          <div className="content_body">
            <p>ایمیل</p>
            <input placeholder="ایمیل خود را وارد کنید"></input>
          </div>
          <div className="content_body">
            <p>نام مدیر عامل شرکت</p>
            <input placeholder="نام مدیر عامل شرکت خود را وارد کنید"></input>
          </div>
          <div className="content_body">
            <p>شماره تلفن</p>
            <input placeholder="شماره تلفن خود را وارد کنید"></input>
          </div>
          <div className="content_body">
            <p>رمز عبور</p>
            <input placeholder="رمز عبور خود را وارد کنید"></input>
          </div>
        </div>
        <div className="void2"></div>
        <div className="register">
          <button>ثبت نام</button>
        </div>
        <div className="login_to_account">
          <p className="register_log">قبلا ثبت نام کردید؟</p>
          <Link style={{textDecoration: "none"}} href="/Login">
            <p className="register_acc">ورود به حساب کاربری</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
