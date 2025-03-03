'use client'

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "../styles/page.module.scss";

const Photo = ({src, index, url, alt}) => {
    const { ref, inView, entry } = useInView({
        threshold: 0.7,
        triggerOnce: true
    });  
 
        return (            
        <>
            <div  className={styles.block+` ${inView ?  "": "hidden"}`}>
            <h3  className={styles.subtitle}>{alt}</h3>
            </div> 
            <div ref={ref}   className={ styles.image+` ${inView ?  "": "hidden"}`}> 
                <div className={styles.photoblock}>
                    <a href={url} className={styles.link}>
                        <Image src={src} alt={alt} width={756} height={426} /> 
                    </a>
                </div>
            </div>     
        </>
    );

};

export default Photo;
