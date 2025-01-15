'use client'

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "../styles/page.module.scss";

const Photo = ({src, index, url, alt}) => {
    const { ref, inView, entry } = useInView({
        threshold: 0.7,
        triggerOnce: true
    });   
    
    
    // if(index>1) {
        return (
        <div ref={ref} className={ styles.image+` ${inView ?  "": "hidden"}`}> 
            <div className={styles.photoblock}>
                <a href={url} className={styles.link}>
                    <Image src={src} alt={alt} width={756} height={426} /> 
                </a>
            </div>
        </div>
    );
// } else {
//     return <div  className={styles.image}> 
//             <div className={styles.photoblock}>
//                 <a href={url} className={styles.link}>
//                     <Image priority src={src} alt={alt} width={756} height={426} 
//                 /> 
//                 </a>
//             </div>
//     </div>
//     }
};

export default Photo;
// [styles.photo, 'hidden'].join(" ")