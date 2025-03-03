import styles from "../styles/page.module.scss";
import { GoMail } from "react-icons/go";
import { FaTelegram, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.footer}>            
            <div className={styles.footerlist}>
                <a href="https://github.com/lihol1" target="_blank" className={styles.icon} aria-label="Перейти по ссылке на github.com"><FaGithub className={styles.icon} /></a>
                <a href="https://wa.me/79507619895" target="_blank" aria-label="Связаться через Whatsapp"><FaWhatsapp className={styles.icon}/></a>
                <a href="https://t.me/lihol1" target="_blank" aria-label="Связаться через Telegram"><FaTelegram className={styles.icon}/></a>
                <a href="mailto:lihol1.yakimova@yandex.ru" aria-label="Написать на email"><GoMail className={styles.icon}/></a>
            </div>
            <div >
                <p className={styles.footerend}>©2025</p>
            </div>
        </div>
    );
};

export default Footer;