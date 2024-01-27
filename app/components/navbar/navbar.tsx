"use client";
import style from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const excludeHeaderFooterRoutes = [
    {
      name: "/profil",
      faName: "پروفایل",
    },
    {
      name: "/Contactus",
      faName: "ارتباط با ما",
    },
    {
      name: "/gallery",
      faName: "گالری",
    },
    {
      name: "/listofMedicalEquipment",
      faName: "لیست تجهیزات پزشکی",
    },
  ];
  return (
    <div className={style.navbar_all}>
      <div className={style.navbar_home_div}>
        <Link href="/">
        <Image src="/HomeIcon.svg" alt="" width={15} height={15} />
        </Link>
        <Link href="/">
        <div className={style.navbar_h1}>خانه</div>
        </Link>
      </div>
      <Image src="/Arrownavbar.svg" alt="" width={9} height={4} />
      <div className={style.navbar_div_p}>
      {excludeHeaderFooterRoutes.map((item) => {
        if (item.name === pathname) {
          return <p className={style.navbar_p}>{item.faName}</p>;
        }
      })}
      </div>
    </div>
  );
}
