import styles from "../styles/page.module.scss";
import List from '../components/List';
import Title from '../components/Title';
import Footer from '../components/Footer';
import BgAnimation from "@/components/BgAnimation";


export default function Home() { 
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.inner}>          
          <BgAnimation />
          <div className={styles.container}> 
            <Title />
            <List />
            <img className={styles.arrow} src="./arrow-down.svg" alt="arrow"></img>
          </div>          
        </div>
      </main>          
      <Footer />
    </div>
  );
}
