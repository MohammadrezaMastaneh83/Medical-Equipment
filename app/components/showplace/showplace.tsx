import styles from "./showplace.module.css"

export default function ShowPlace (){
    return(
        <section>
        <div className={styles.showplace_All}>
        <hr className={styles.showplace_hr} />
            <div className={styles.showplace_lozy_with}></div>
            <div className={styles.showplace_lozy_green}></div>
            <div className={styles.showplace_p}>برگزاری نمایشگاه های دستگاه های <p className={styles.showplace_p1}>تجهیزات پزشک</p></div>
         <hr className={styles.showplace_hr1} />
        </div>
    </section>
    )
}
"showplace"