import styles from "./Guidecard.module.css"

export default function GuideCard (){
    return(
        <section>
            <div className={styles.guidAll}>
            <hr className={styles.guid_hr} />
                <div className={styles.Guide_lozy_with}></div>
                <div className={styles.Guide_lozy_green}></div>
                <div className={styles.guid_p}>راهنمای<p className={styles.guid_p1}>خرید</p> لوازم و تجهیزات پزشکی</div>
             <hr className={styles.guid_hr1} />
            </div>
        </section>
        
    )
}