import styles from "../styles/page.module.scss";
import { list } from '../list';
import Photo from './Photo';
import Description from './Description';

const List = () => {  
  
    return (
        <ul className={styles.list}>           
            {list.map((item, i)=>{
              return (
              <li key={i} className={styles.item}>                                   
                <Photo index={i} src={item.img} url={item.src} alt={item.title}/> 
                <Description index={i} title={item.title} stack={item.stack}/> 
              </li>
              )
            })}
          </ul>
    );
};

export default List;