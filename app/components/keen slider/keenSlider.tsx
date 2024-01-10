"use client";
import style from "./keenSlider.module.css";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
export default function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 4,
      spacing: 15,
    },
  });

  return (
    <>
        <div className={style.keenslider_back}>
        <div className={style.keenslider_All}>
          <hr className={style.keenslider_hr} />
          <div className={style.keenslider_lozy_with}></div>
          <div className={style.keenslider_lozy_green}></div>
          <div className={style.keenslider_headlinp}>
             برخی از
            <p className={style.someproduct_headlinp2}>محصولات</p>
          </div>
          <hr className={style.keenslider_hr1} />
          <div
              className={style.keenslider_arrow}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              // disabled={
              //   currentSlide ===
              //   instanceRef.current.track.details.slides.length - 1
              // }
            >
              <Image alt="" src="/Arrow - rightCircle.svg" width={27} height={27}/>
            </div>
          <div
              className={style.keenslider_arrow}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              // disabled={currentSlide === 0}
              // aria-disabled
            >
              <Image alt="" src="/Arrow - Left Circle.svg" width={35} height={35}/>
            </div>

            
            <hr className={style.keenslider_hr2} />
        </div>
      </div>
      <div className={style.keenslider_dad}>
      <div className={style.navigation_wrapper}>
        <div ref={sliderRef} className={`keen-slider ${style.keen_slider}`}>
          
          <div className={`keen-slider__slide ${style.number_slide1}`}>
            <div className={style.keenslider_all}>
              <Image
                alt=""
                src="/water_splash_5010_dental_waterjet 1.svg"
                width={214}
                height={214}
              />
              <div className={style.keenslider_texte}>
                <div className={style.keenslider_texte_baby}>
                <p className={style.keenslider_p}>
                  جرم گیر آبی واتر اسپلش مدل 5105
                </p>
                <div className={style.keenslider_div_p}>
                  <div className={style.keenslider_but}></div>
                  <p className={style.keenslider_p1}>
                    قابلیت تنظیم فشار از روی دسته  
                  </p>
                </div>
                <div className={style.keenslider_div_p1}>
                  <div className={style.keenslider_but}></div>
                  <p className={style.keenslider_p1}>
                    قابلیت تنظیم فشار از روی دسته
                  </p>
                </div>
                <div className={style.keenslider_div_pall}>
                <p className={style.keenslider_p2}>خرید محصول</p>
                <Image className={style.keenslider_pic12}
                alt=""
                src="/Arrow-p_Left 3.svg"
                width={14}
                height={14}
              />
              </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`keen-slider__slide ${style.number_slide2}`}>
          <div className={style.keenslider_all}>
              <Image
                alt=""
                src="/water_splash_5010_dental_waterjet 1.svg"
                width={214}
                height={214}
              />
              <div className={style.keenslider_texte}>
                <div className={style.keenslider_texte_baby}>
                <p className={style.keenslider_p}>
                  جرم گیر آبی واتر اسپلش مدل 5105
                </p>
                <div className={style.keenslider_div_p}>
                  <div className={style.keenslider_but}></div>
                  <p className={style.keenslider_p1}>
                    قابلیت تنظیم فشار از روی دسته
                  </p>
                </div>
                <div className={style.keenslider_div_p1 }>
                  <div className={style.keenslider_but}></div>
                  <p className={style.keenslider_p1}>
                    قابلیت تنظیم فشار از روی دسته
                  </p>
                </div>
                <div className={style.keenslider_div_pall}>
                <p className={style.keenslider_p2}>خرید محصول</p>
                <Image className={style.keenslider_pic12}
                alt=""
                src="/Arrow-p_Left 3.svg"
                width={14}
                height={14}
              />
              </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`keen-slider__slide ${style.number_slide3}`}>
          <div className={style.keenslider_all}>
              <Image
                alt=""
                src="/water_splash_5010_dental_waterjet 1.svg"
                width={214}
                height={214}
              />
              <div className={style.keenslider_texte}>
                <div className={style.keenslider_texte_baby}>
                <p className={style.keenslider_p}>
                  جرم گیر آبی واتر اسپلش مدل 5105
                </p>
                <div className={style.keenslider_div_p}>
                  <div className={style.keenslider_but}></div>
                  <p className={style.keenslider_p1}>
                    قابلیت تنظیم فشار از روی دسته
                  </p>
                </div>
                <div className={style.keenslider_div_p1 }>
                  <div className={style.keenslider_but}></div>
                  <p className={style.keenslider_p1}>
                    قابلیت تنظیم فشار از روی دسته
                  </p>
                </div>
                <div className={style.keenslider_div_pall}>
                <p className={style.keenslider_p2}>خرید محصول</p>
                <Image className={style.keenslider_pic12}
                alt=""
                src="/Arrow-p_Left 3.svg"
                width={14}
                height={14}
              />
              </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`keen-slider__slide ${style.number_slide4}`}>
          <div className={style.keenslider_all}>
              <Image
                alt=""
                src="/water_splash_5010_dental_waterjet 1.svg"
                width={214}
                height={214}
              />
              <div className={style.keenslider_texte}>
                <div className={style.keenslider_texte_baby}>
                <p className={style.keenslider_p}>
                  جرم گیر آبی واتر اسپلش مدل 5105
                </p>
                <div className={style.keenslider_div_p}>
                  <div className={style.keenslider_but}></div>
                  <p className={style.keenslider_p1}>
                    قابلیت تنظیم فشار از روی دسته
                  </p>
                </div>
                <div className={style.keenslider_div_p1 }>
                  <div className={style.keenslider_but}></div>
                  <p className={style.keenslider_p1}>
                    قابلیت تنظیم فشار از روی دسته
                  </p>
                </div>
                <div className={style.keenslider_div_pall}>
                <p className={style.keenslider_p2}>خرید محصول</p>
                <Image className={style.keenslider_pic12}
                alt=""
                src="/Arrow-p_Left 3.svg"
                width={14}
                height={14}
              />
              </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`keen-slider__slide ${style.number_slide5}`}>
          <div className={style.keenslider_all}>
              <Image
                alt=""
                src="/water_splash_5010_dental_waterjet 1.svg"
                width={214}
                height={214}
              />
              <div className={style.keenslider_texte}>
                <div className={style.keenslider_texte_baby}>
                <p className={style.keenslider_p}>
                  جرم گیر آبی واتر اسپلش مدل 5105
                </p>
                <div className={style.keenslider_div_p}>
                  <div className={style.keenslider_but}></div>
                  <p className={style.keenslider_p1}>
                    قابلیت تنظیم فشار از روی دسته
                  </p>
                </div>
                <div className={style.keenslider_div_p1 }>
                  <div className={style.keenslider_but}></div>
                  <p className={style.keenslider_p1}>
                    قابلیت تنظیم فشار از روی دسته
                  </p>
                </div>
                <div className={style.keenslider_div_pall}>
                <p className={style.keenslider_p2}>خرید محصول</p>
                <Image className={style.keenslider_pic12}
                alt=""
                src="/Arrow-p_Left 3.svg"
                width={14}
                height={14}
              />
              </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`keen-slider__slide ${style.number_slide6}`}>
          <div className={style.keenslider_all}>
              <Image
                alt=""
                src="/water_splash_5010_dental_waterjet 1.svg"
                width={214}
                height={214}
              />
              <div className={style.keenslider_texte}>
                <div className={style.keenslider_texte_baby}>
                <p className={style.keenslider_p}>
                  جرم گیر آبی واتر اسپلش مدل 5105
                </p>
                <div className={style.keenslider_div_p}>
                  <div className={style.keenslider_but}></div>
                  <p className={style.keenslider_p1}>
                    قابلیت تنظیم فشار از روی دسته
                  </p>
                </div>
                <div className={style.keenslider_div_p1 }>
                  <div className={style.keenslider_but}></div>
                  <p className={style.keenslider_p1}>
                    قابلیت تنظیم فشار از روی دسته
                  </p>
                </div>
                <div className={style.keenslider_div_pall}>
                <p className={style.keenslider_p2}>خرید محصول</p>
                <Image className={style.keenslider_pic12}
                alt=""
                src="/Arrow-p_Left 3.svg"
                width={14}
                height={14}
              />
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
           
          </>
        )}
        <button className={style.keenslider_btn}>مشاهده بیشتر
        <Image alt="" src="/Arrow - Left 3.svg" width={14} height={14} />
        </button>
        </div>
        </div>
      {loaded && instanceRef.current && <div className="dots"></div>}
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
