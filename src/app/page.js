import styles from "../styles/page.module.scss";
import List from '../components/List';
import Title from '../components/Title';
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
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        {/* <Image src={'/happy-stuff.jpg'} width={500} height={300}></Image> */}
      </footer>
    </div>
  );
}
