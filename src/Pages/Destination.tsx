import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"
import bg_dest from "/assets/destination/background-destination-desktop.jpg";
import bg_dest_tab from "/assets/destination/background-destination-tablet.jpg";
import bg_dest_mobile from "/assets/destination/background-destination-mobile.jpg";
// import moon from "/assets/destination/image-moon.webp";
import DestMini from "../Components/DestMini";

const Destination = () => {
  const [activePage, setActivePage] = useState<string>("moon");
  const [data, setData] = useState<any>(null);
  const [bgImg, setBgImg] = useState<any>(bg_dest);
  const [applySlide, setApplySlide] = useState<boolean>(false);

  const handleActive = (id: string): void => {
    setActivePage(id);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleBg = (): void => {
    if (window.innerWidth <= 768 && window.innerWidth > 425) {
      setBgImg(bg_dest_tab);
    } else if (window.innerWidth <= 425) {
      setBgImg(bg_dest_mobile);
    } else {
      setBgImg(bg_dest);
    }
  };

  useEffect(() => {
    handleBg();
    window.addEventListener("resize", handleBg);
    return () => {
      window.removeEventListener("resize", handleBg);
    };
  }, []);

  useEffect(() => {
    console.log("activePage", activePage);
    setApplySlide(true);
  }, [activePage]);

  if (!data) {
    return <div style={{
      backgroundImage: `url(${bgImg})`,
    }} className="h-screen w-screen text-5xl text-[#410f0f] absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">Loading...</div>;
  }

  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="hero flex flex-col justify-center items-center align-middle py-28 2xl:h-full lg:h-screen 2xl:py-64 text-white"
    >
      <div className="w-[80%] h-full flex flex-col justify-center items-center align-middle 2xl:gap-20 gap-10 px-20">
        <h2 className="self-baseline text-3xl">
          <span className="font-bold">01</span> PICK YOUR DESTINATION
        </h2>
        <div className="w-full h-full flex flex-col lg:justify-end">
          <div className="w-full h-full flex flex-col lg:flex-row lg:gap-8 justify-center items-center align-middle">
            <div className={`w-full h-full flex flex-col justify-center text-center lg:text-left items-center lg:items-start align-middle gap-6 relative ${applySlide ? "" : ""}`}>
              {activePage === "moon" && <img alt="moon" src={data.destinations[0].images.webp} className="moon slide-in" />}
              {activePage === "mars" && <img alt="mars" src={data.destinations[1].images.webp} className="moon slide-in" />}
              {activePage === "europa" && <img alt="europa" src={data.destinations[2].images.webp} className="moon slide-in" />}
              {activePage === "titan" && <img alt="titan" src={data.destinations[3].images.webp} className="moon slide-in" />}
            </div>
            <div className="w-full h-full flex justify-center items-center align-middle">
              <DestMini data={data} activePage={activePage} handleActive={handleActive} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;