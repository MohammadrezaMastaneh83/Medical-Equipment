"use client";
import style from "./Information of hospital.module.css"
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { useState, useEffect } from "react";
const table = [
  {
    cityName:"تهران",
    hospitallName:"بوعلی",
    ActivityName:"عمومی",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"350",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 77 54 88 99"
  },
  {
    cityName:"شیراز",
    hospitallName:"آرتا",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"450",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 77 54 88 99"
  },
  {
    cityName:"تهران",
    hospitallName:"امام علی",
    ActivityName:"عمومی",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 77 54 88 99"
   
  },
  {
    cityName:"تهران",
    hospitallName:"امام علی",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 88 55 66 88"
   
  },
  {
    cityName:"شیراز",
    hospitallName:"آرتا",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 99 55 44 66"
  },
  {
    cityName:"تهران",
    hospitallName:"امام علی",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 55 20 30 21"
   
  },
  {
    
    cityName:"تهران",
    hospitallName:"آرتا",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 55 66 88 77"
  },
  {
    cityName:"تهران",
    hospitallName:"بوعلی",
    ActivityName:"عمومی",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"350",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 77 54 88 99"
  },
  {
    cityName:"شیراز",
    hospitallName:"آرتا",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"450",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 77 54 88 99"
  },
  {
    cityName:"تهران",
    hospitallName:"امام علی",
    ActivityName:"عمومی",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 77 54 88 99"
   
  },
  {
    cityName:"تهران",
    hospitallName:"امام علی",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 88 55 66 88"
   
  },
  {
    cityName:"شیراز",
    hospitallName:"آرتا",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 99 55 44 66"
  },
  {
    cityName:"تهران",
    hospitallName:"امام علی",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 55 20 30 21"
   
  },
  {
    
    cityName:"تهران",
    hospitallName:"آرتا",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 55 66 88 77"
  },
  {
    cityName:"تهران",
    hospitallName:"بوعلی",
    ActivityName:"عمومی",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"350",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 77 54 88 99"
  },
  {
    cityName:"شیراز",
    hospitallName:"آرتا",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"450",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 77 54 88 99"
  },
  {
    cityName:"تهران",
    hospitallName:"امام علی",
    ActivityName:"عمومی",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 77 54 88 99"
   
  },
  {
    cityName:"تهران",
    hospitallName:"امام علی",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 88 55 66 88"
   
  },
  {
    cityName:"شیراز",
    hospitallName:"آرتا",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 99 55 44 66"
  },
  {
    cityName:"تهران",
    hospitallName:"امام علی",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 55 20 30 21"
   
  },
  {
    
    cityName:"تهران",
    hospitallName:"آرتا",
    ActivityName:"اعصاب و روان",
    CoveredName:"دانشگاه آزاد اسلامی",
    bedNumber:"500",
    univercityName:"اردبیل",
    adress:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    phoneNumber:"021 55 66 88 77"
  },

];
export default function Information_Hospital() {
  const [show, setshow] = useState(false);
  const [currentItems, setcurrentItems] = useState<any>();
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setpageCount] = useState(0);

  const itemsPerPage = 7;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setcurrentItems(table.slice(itemOffset, endOffset));
    setpageCount(Math.ceil(table.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % table.length;
    setItemOffset(newOffset);
  };
  return (
    <div className={style.productlist_all}>
      <div className={style.productlist_box_filter}>
        <div className={style.productlist_header_div}>
          <p className={style.productlist_header_p}>
            لطفا کاربری دستگاه خود را در گروه های زیر انتخاب کنید.
          </p>
          <p className={style.productlist_header_p}>
            لطفا برای جستجوی بهتر باکس های زیر را پر کنید.
          </p>
        </div>
        <div className={style.productlist_dropdown}>
          <div className={style.productlist_custom_select}>
            <select className={style.productlist_box_select2}>
              <option value="0">نام دستگاه</option>
              <option value="1">مارک دستگاه</option>
              <option value="2">کشور سازنده</option>
              <option value="3">شرکت نمایندگی</option>
              <option value="4">شماره تماس</option>
              <option value="5">لینک سایت</option>
            </select>
          </div>
          <div className={style.productlist_custom_select}>
            <select className={style.productlist_box_select2}>
              <option value="0">ردیف</option>
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
              <option value="5"></option>
            </select>
          </div>
          <div className={style.productlist_input_div}>
            <input
              type="text"
              className={style.productlist_input}
              placeholder="کلمه مورد نظر خود را تایپ کنید."
            />
            <Image
              alt=""
              src="/search_normal_li.svg"
              width={18}
              height={18}
              className={style.productlist_search_pic}
            />
          </div>
        </div>
        <div className={style.productlist_btn_div}>
          <button className={style.productlist_btn_1}>
            نمایش کل لیست جاری
            <Image alt="" src="/tik.svg" width={18} height={18} />
          </button>
          <button
            className={style.productlist_btn_2}
            onClick={() => {
              setshow(true);
            }}
          >
            جست جو
            <Image alt="" src="/search_blue.svg" width={18} height={18} />
          </button>
        </div>
      </div>
      <div className={style.productlist_fix}>
      <div className={style.productlist_table_div}>
        <table>
          <tr className={style.productlist_header_tr}>
            <th className={style.productlist_th1}>ردیف</th>
            <th className={style.productlist_th2}>نام شهرستان  </th>
            <th className={style.productlist_th3}>نام بیمارستان </th>
            <th className={style.productlist_th4}>نام رشته فعالیت </th>
            <th className={style.productlist_th5}>نام تحت پوشش</th>
            <th className={style.productlist_th6}>تعداد تخت ثابت</th>
            <th className={style.productlist_th7}>نام دانشگاه ناظر</th>
            <th className={style.productlist_th8}>آدرس</th>
            <th className={style.productlist_th9}>شماره تماس</th>
          </tr>
          {table &&
            table &&
            currentItems &&
            currentItems.map((item: any, index: any) => {
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
                show && (
                  <tr key={index} style={{ background: color }}>
                    <td className={style.productlist_td1}>{index + 1}</td>
                    <td className={style.productlist_td2}>{item.cityName}</td>
                    <td className={style.productlist_td3}>{item.hospitallName}</td>
                    <td className={style.productlist_td4}>{item.ActivityName}</td>
                    <td className={style.productlist_td6}>{item.CoveredName}</td>
                    <td className={style.productlist_td7}>{item.bedNumber}</td>
                    <td className={style.productlist_td8}>{item.univercityName}</td>
                    <td className={style.productlist_td9}>{item.adress}</td>
                    <td className={style.productlist_td5}><div className={style.productlist_td_div2}>{item.phoneNumber}</div></td>
                  </tr>
               
                )
              );
            })}{" "}
        </table>

        <div
          className={style.productlist_first}
          style={show ? { display: "none" } : {}}
        >
          <p className={style.productlist_wellcome}>
            برای دریافت اطلاعات جدول لطفا از کادر بالا استفاده کنید.
          </p>
          <Image alt="" src="/Frame 43.png" width={200} height={183} />
        </div>
      </div>
      <div
        className={style.productlist_pagination}
        style={show ? {} : { display: "none" }}
      >
        <ReactPaginate
          breakLabel="..."
          nextLabel={<img src="/right.svg" className={style.productlist_image}></img>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel={<img src="/left.svg" className={style.productlist_image}></img>}
          renderOnZeroPageCount={null}
          containerClassName={style.productlist_pagination_container}
          pageLinkClassName={style.productlist_page_num}
          previousLinkClassName={style.productlist_page_previous}
          nextLinkClassName={style.productlist_page_next}
          activeLinkClassName={style.productlist_active}
        />
      </div>
      </div>
    </div>
  );
}
