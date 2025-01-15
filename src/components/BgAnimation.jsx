
import stars from "../styles/stars.module.scss";

const BgAnimation = () => {
    return (
        <div className={stars['bg-holder']}>              
              <div className={stars['bg-animation']}>
                <div className={stars.stars}></div>
                <div className={stars.stars2}></div>
                <div className={stars.stars3}></div>               

                <div className={stars.stars4}><span className={stars.cell}></span></div>
                <div className={stars.stars4}><span className={stars.cell}></span></div>
                <div className={stars.stars4}><span className={stars.cell}></span></div>
                <div className={stars.stars4}><span className={stars.cell}></span></div>
                <div className={stars.stars4}><span className={stars.cell}></span></div>
                <div className={stars.stars4}><span className={stars.cell}></span></div>
                <div className={stars.stars4}><span className={stars.cell}></span></div>
                <div className={stars.stars4}><span className={stars.cell}></span></div>
                <div className={stars.stars4}><span className={stars.cell}></span></div>
                <div className={stars.stars4}><span className={stars.cell}></span></div>
                           
              </div>  
          </div>
    );
};

export default BgAnimation;