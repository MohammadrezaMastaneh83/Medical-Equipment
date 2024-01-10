import styles from "./group of Medical Equipment.module.css";
import Image from "next/image";
export default function Group_of_Medical_Equipment() {
  const catalog = [
    {
      number: "1",
      product: "Compact Helix PCD کامپکت مارپیچ",
      model: "Cleaver Sciertific",
      country: "ایران",
      company: "روشن رای سپاهان",
      call: "021 77 54 88 99",
      link: "مشاهده",
    },
    {
      number: "2",
      product: "Compact Helix PCD کامپکت مارپیچ",
      model: "MEDITE",
      country: "اسپانیا",
      company: "ایران پنام",
      call: "021 77 54 88 99",
      link: "مشاهده",
    },
    {
      number: "3",
      product: "Compact Helix PCD کامپکت مارپیچ",
      model: "Cleaver Sciertific",
      country: "اتریش",
      company: " روشن رای سپاهان",
      call: "021 77 55 88 99",
      link: "مشاهده",
    },
    {
      number: "4",
      product: "Compact Helix PCD کامپکت مارپیچ",
      model: "MEDITE",
      country: "فنلاند",
      company: " روشن رای سپاهان",
      call: "021 88 55 66 88",
      link: "مشاهده",
    },
    {
      number: "5",
      product: "Compact Helix PCD کامپکت مارپیچ",
      model: "Cleaver Sciertific",
      country: "ایران",
      company: "ایران پنام",
      call: "021 99 55 44 66",
      link: "مشاهده",
    },
    {
      number: "6",
      product: "Compact Helix PCD کامپکت مارپیچ",
      model: "MEDITE",
      country: "ایران",
      company: "ایران پنام",
      call: "021 55 20 30 21",
      link: "مشاهده",
    },
    {
      number: "7",
      product: "Compact Helix PCD کامپکت مارپیچ",
      model: "Cleaver Sciertific",
      country: "عربستان سعودی",
      company: "روشن رای سپاهان ",
      call: "021 55 66 88 77",
      link: "مشاهده",
    },
  ];
  return (
    <div className={styles.group_all}>
      <div className={styles.group_dad}>
        <div className={styles.group_All}>
          <hr className={styles.group_hr} />
          <div className={styles.group_lozy_with}></div>
          <div className={styles.group_lozy_green}></div>
          <div className={styles.group_headlinp}>
            <p className={styles.group_headlinp2}>
              گروه های تخصصی تجهیزات پزشکی
            </p>
          </div>
          <hr className={styles.group_hr1} />
        </div>
      </div>
      <div className={styles.group_box}>
        <div className={styles.group_boxheader_dad}>
          <div className={styles.group_boxheader1}>
            <p className={styles.group_boxheaderp1}>ردیف</p>
          </div>
          <div className={styles.group_boxheader2}>
            <p className={styles.group_boxheaderp1}>نام دستگاه</p>
          </div>
          <div className={styles.group_boxheader3}>
            <p className={styles.group_boxheaderp1}>مارک دستگاه</p>
          </div>
          <div className={styles.group_boxheader4}>
            <p className={styles.group_boxheaderp1}>کشور سازنده</p>
          </div>
          <div className={styles.group_boxheader5}>
            <p className={styles.group_boxheaderp1}>شرکت نمایندگی</p>
          </div>
          <div className={styles.group_boxheader6}>
            <p className={styles.group_boxheaderp1}>شماره تماس</p>
          </div>
          <div className={styles.group_boxheader7}>
            <p className={styles.group_boxheaderp1}>لینک سایت</p>
          </div>
        </div>
        {catalog.map((item, index) => {
          let color;
          if (index == 1) {
            color = "#FCFCFC";
          } else {
            if (index == 3) {
              color = "#FCFCFC";
            } else {
              if (index == 5) {
                color = "#FCFCFC";
              }
            }
          }

          return (
            <div
              className={styles.group_box_item_dad}
              style={{ background: color }}
            >
              <div className={styles.group_box_item1}>{item.number}</div>
              <div className={styles.group_box_item2}>{item.product}</div>
              <div className={styles.group_box_item3}>{item.model}</div>
              <div className={styles.group_box_item4}>{item.country}</div>
              <div className={styles.group_box_item5}>{item.company}</div>
              <div className={styles.group_box_item6}>
                <div className={styles.group_call}>{item.call}</div>
              </div>
              <div className={styles.group_box_item7}>
                <div className={styles.group_link}>{item.link}</div>
              </div>
            </div>
          );
        })}
      <button className={styles.group_btn}>مشاهده بیشتر
      <Image alt="" src="/Arrow - Left 3_btn.svg" width={14} height={14} />
      </button>
      </div>
    </div>
  );
}
