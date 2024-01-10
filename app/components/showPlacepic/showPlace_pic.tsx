import styles from "./showPlace_pic.module.css"
import Image from 'next/image'

export default function ShowPlace_Pic(){
    return(
        <div className={styles.showpic_all}>
            <div className={styles.showpic_1}>
                <Image className={styles.shpic1} src="/show 1.svg" alt="" width={486} height={273} />
                <div className={styles.shdiv_p1}>
                <p className={styles.shp1}> بیست و چهارمین نمایشگاه بین‌المللی ایران هلث</p>
                </div>
                <Image className={styles.shpic2} src="/show 2.svg" alt="" width={690} height={273} />
                <div className={styles.shdiv_p2}>
                <p className={styles.shp2}> بیست و چهارمین نمایشگاه بین‌المللی ایران هلث</p>
                </div>
                
            </div>
            <div className={styles.showpic_2}>
                <Image className={styles.shpic3} src="/show 3.svg" alt="" width={690} height={273} />
                <div className={styles.shdiv_p3}>
                <p className={styles.shp3}> بیست و چهارمین نمایشگاه بین‌المللی ایران هلث</p>
                </div>
                <Image className={styles.shpic4} src="/show 4.svg" alt=""  width={486} height={273}/>
                <div className={styles.shdiv_p4}>
                <p className={styles.shp4}> بیست و چهارمین نمایشگاه بین‌المللی ایران هلث</p>
                </div>
            </div>
        </div>
    )
}