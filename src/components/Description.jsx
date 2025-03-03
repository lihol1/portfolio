'use client'
import { useInView } from "react-intersection-observer";
import styles from "../styles/page.module.scss";
import { useEffect } from "react";


const Description = ({index, title, stack}) => { 
   
    return (
        <div className={styles.desc}>
            <div  className={styles.block+` ${inView ?  "": "hidden"}`}>
                <h3  className={styles.subtitle}>{title}</h3>                   
            </div>
        </div>
    );   
};

export default Description;
