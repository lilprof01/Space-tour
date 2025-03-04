import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"
import bg_crew from "/assets/crew/background-crew-desktop.jpg";
import bg_crew_tab from "/assets/crew/background-crew-tablet.jpg";
import bg_crew_mobile from "/assets/crew/background-crew-mobile.jpg";

const Crew = () => {
  const [bgImg, setBgImg] = useState<any>(bg_crew);

  const handleBg = (): void => {
    if (window.innerWidth <= 768 && window.innerWidth > 425){
      setBgImg(bg_crew_tab);
    } else if(window.innerWidth <= 425) {
      setBgImg(bg_crew_mobile)
    }
  };

  useEffect(() => {
    handleBg();
  }, []);

  return (
    <section style={{
      backgroundImage: `url(${bgImg})`
    }} className="hero flex justify-center items-center align-middle py-32 h-screen text-white">
      
    </section>
  )
}

export default Crew