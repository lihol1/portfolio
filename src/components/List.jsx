'use client'
import styles from "../styles/page.module.scss";
import { list } from '../list';
import Photo from './Photo';

const List = () => { 
 
    return (
        <ul className={styles.list}>           
            {list.map((item, i)=>{
              return (
                <li key={i} className={styles.item}>                     
                  <Photo index={i} src={item.img} url={item.src} alt={item.title}/>                 
                </li>
              )
            })}
          </ul>
    );
};

export default List;