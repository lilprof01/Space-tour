import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import bg_home from "/assets/home/background-home-desktop.jpg";
import bg_home_tab from "/assets/home/background-home-tablet.jpg";
import bg_home_mobile from "/assets/home/background-home-mobile.jpg";

const Home = () => {
  const [bgImg, setBgImg] = useState<any>(bg_home);

  const handleBg = (): void => {
    console.log("handleBg called, window.innerWidth:", window.innerWidth);
    if (window.innerWidth <= 768 && window.innerWidth > 425){
      setBgImg(bg_home_tab);
    } else if(window.innerWidth <= 425) {
      setBgImg(bg_home_mobile)
    } else {
      setBgImg(bg_home);
    }
  };

  useEffect(() => {
    console.log("Adding resize event listener");
    handleBg();
    window.addEventListener("resize", handleBg);
    return () => {
      console.log("Removing resize event listener");
      window.removeEventListener("resize", handleBg);
    };
  }, []);

  return (
    <section style={{
      backgroundImage: `url(${bgImg})`
    }} className="hero flex justify-center items-center align-middle py-32 h-screen text-white">
        <div className="w-[90%] sm:w-[70%] h-full flex flex-col lg:justify-end">
          <div className="w-full h-full lg:h-[60%] flex flex-col lg:flex-row lg:gap-8 justify-between items-center align-middle">
            <div className="w-full flex flex-col justify-center text-center lg:text-left items-center lg:items-start align-middle gap-6">
              <h4 className="text-sm sm:text-lg">SO, YOU WANT TO TRAVEL TO</h4>
              <h1 className="space text-8xl sm:text-9xl">SPACE</h1>
              <p className="text-[16px] sm:text-[18px]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="w-full h-full flex justify-center lg:justify-end items-center align-middle">
            <Link to="/destination"><div className="fancy-button flex justify-center items-center align-middle text-4xl text-[grey] h-[250px] w-[250px] bg-white rounded-full hover:cursor-pointer">EXPLORE</div></Link>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home