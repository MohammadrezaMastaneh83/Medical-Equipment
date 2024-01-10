'use client'
import styles from "./news.module.css";
import Image from "next/image";
import { useEffect } from "react";
export default function Landing_News() {
  const news = [
    {
      img: "/imagegoldon.png",
      subttile: " چگونه طراحی یوآی و یوایکس را شروع کنیم؟",
      pragrath:
        "باید نسبت به مهارت های خود آگاهی کافی را ابتدا بایدنسبت به مهارت های خود",
      icon: "Calendar.svg",
      number:"2",
      p1: "هفته پیش",
      p2: "مطالعه بیشتر",
      icon2: "/ArrowAkhbar.svg",
    },
    {
      img: "/imagegoldon.png",
      subttile: "چگونه طراحی یوآی و یوایکس را شروع کنیم؟",
      pragrath:
        "باید نسبت به مهارت های خود آگاهی کافی را ابتدا بایدنسبت به مهارت های خود",
      icon: "Calendar.svg",
      number:"2",
      p1: "هفته پیش",
      p2: "مطالعه بیشتر",
      icon2: "/ArrowAkhbar.svg",
    },
    {
      img: "/imagegoldon.png",
      subttile: "چگونه طراحی یوآی و یوایکس را شروع کنیم؟",
      pragrath:
        "باید نسبت به مهارت های خود آگاهی کافی را ابتدا بایدنسبت به مهارت های خود",
      icon: "Calendar.svg",
      number:"2",
      p1: "هفته پیش",
      p2: "مطالعه بیشتر",
      icon2: "/ArrowAkhbar.svg",
    },
    {
      img: "/imagegoldon.png",
      subttile: "چگونه طراحی یوآی و یوایکس را شروع کنیم؟",
      pragrath:
        "باید نسبت به مهارت های خود آگاهی کافی را ابتدا بایدنسبت به مهارت های خود",
      icon: "Calendar.svg",
      number:"2",
      p1: "هفته پیش",
      p2: "مطالعه بیشتر",
      icon2: "/ArrowAkhbar.svg",
    },
  ];
 
  return (
    <div className={styles.landnews_all}>
      <div className={styles.landnews_dad}>
        <div className={styles.landnews_All}>
          <hr className={styles.landnews_hr} />
          <div className={styles.landnews_lozy_with}></div>
          <div className={styles.landnews_lozy_green}></div>
          <div className={styles.landnews_headlinp}>
            <p className={styles.landnews_headlinp2}>اخبار </p>
          </div>
          <hr className={styles.landnews_hr1} />
        </div>
      </div>
        <div className={styles.landnews_map_all}>
          {news.map((item,index) =>{
            return(
              <div className={styles.landnews_mapbox}>
                <Image alt="" src={item.img} width={282} height={172.028} className={styles.landnews_map_imag}/>
                <div className={styles.landnews_map_box2}>
                <p className={styles.landnews_map_subtile}>{item.subttile}</p>
                <p className={styles.landnews_map_pragrath}>{item.pragrath}</p>
                <div className={styles.landnews_baby_box}>
                <div className={styles.landnews_map_calenther}>
                <Image alt="" src={item.icon} width={14} height={14}  className={styles.landnews_map_icon}/>
                {/* <div className={styles.landnews_map_number}>{item.number}</div> */}
                <div className={styles.landnews_map_p1}>{index+1} {item.p1}</div>
                </div>
                <div className={styles.landnews_map_arrow}>
                <div className={styles.landnews_map_p2}>{item.p2}</div>
                <Image alt="" src={item.icon2} width={14} height={14} className={styles.landnews_map_icon2}/>
                </div>
                </div>
                </div>
              </div>
            )
          })}
        </div>
          <button className={styles.landnews_end_btn}>مطالعه بیشتر
          <Image alt="" src="/Arrow - Left 3_btn.svg" width={14} height={14} />
          </button>
          
    </div>
  );
}
