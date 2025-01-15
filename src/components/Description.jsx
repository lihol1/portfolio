'use client'
import { useInView } from "react-intersection-observer";
import styles from "../styles/page.module.scss";
import { useEffect } from "react";


const Description = ({index, title, stack}) => {
    const { ref, inView, entry } = useInView({
        threshold: 0.8,
        triggerOnce: true,
        root: null
    });   

    // if(index>1) {
        return (
            <div className={styles.desc}>
                <div ref={ref} className={styles.block+` ${inView ?  "": "hidden"}`}>
                    <h3  className={styles.subtitle}>{title}</h3>
                    <ul className={styles.sublist}>
                        {stack.map((el, i)=>{
                            return <span key={i} className={styles.label+` ${inView ?  "": "hidden"}`}>{el}</span>
                        })}
                    </ul>
                </div>
            </div>
        );
    // } else {
    //     return (
    //         <div className={styles.desc}>
    //             <div ref={ref} className={styles.block}>
    //                 <h3  className={styles.subtitle}>{title}</h3>
    //                 <ul className={styles.sublist}>
    //                     {stack.map((el, i)=>{
    //                         return <span key={i} className={styles.label}>{el}</span>
    //                     })}
    //                 </ul>
    //             </div>
    //         </div>
    //     );
    // }
};

export default Description;
