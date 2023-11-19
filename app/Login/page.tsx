import Image from "next/image";
import "../../styles/login.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className="main_page2">
      <div className="login_box">
        <div className="void_1"></div>
        <div className="top_page2">
          <div className="exit_btn2">
            <Image alt="" src="/add.svg" width={24} height={24}></Image>
          </div>
          <div className="logo2">
            <Image alt="" src="/LOGO1.svg" width={181} height={129}></Image>
          </div>
        </div>
        <div className="void_2"></div>
        <div className="body_page2">
          <div className="content_body2">
            <p>نام کاربری</p>
            <input placeholder="ایمیل خود را وارد کنید"></input>
          </div>
          <div className="content_body2">
            <p>رمز عبور</p>
            <input placeholder="رمز عبور خود را وارد کنید"></input>
          </div>
        </div>
        <div className="void_3"></div>
        <div className="register2">
          <button>ورود</button>
        </div>
        <div className="forget_pass">
          <Link
            style={{ textDecoration: "none", color: "#2c9cf0"  , width: 400 , height : 45}}  
            href="/Forgetpass"
          >
            <button>فراموشی رمز عبور</button>
          </Link>
        </div>
        <div className="void_4"></div>
        <div className="login_to_account2">
          <p className="register_log2">آیا حساب کاربری ندارید؟</p>
          <Link style={{ textDecoration: "none" }} href="/">
            <p className="register_acc2">ساخت حساب کاربری</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
