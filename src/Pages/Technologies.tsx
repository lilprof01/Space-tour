import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"
import bg_tech from "/assets/technology/background-technology-desktop.jpg";
import bg_tech_tab from "/assets/technology/background-technology-tablet.jpg";
import bg_tech_mobile from "/assets/technology/background-technology-mobile.jpg";

const Technologies = () => {
  const [bgImg, setBgImg] = useState<any>(bg_tech);

  const handleBg = (): void => {
    if (window.innerWidth <= 768 && window.innerWidth > 425){
      setBgImg(bg_tech_tab);
    } else if(window.innerWidth <= 425) {
      setBgImg(bg_tech_mobile)
    }
  };

  useEffect(() => {
    handleBg();
  }, []);

  return (
    <section style={{
      backgroundImage: `url(${bgImg})`,
    }} className="hero flex justify-center items-center align-middle py-32 h-screen text-white">
      
    </section>
  )
}

export default Technologies