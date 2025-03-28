import { useEffect, useState } from "react";
import bg_dest from "/assets/destination/background-destination-desktop.jpg";
import bg_dest_tab from "/assets/destination/background-destination-tablet.jpg";
import bg_dest_mobile from "/assets/destination/background-destination-mobile.jpg";
import DestMini from "../Components/DestMini";

interface DestinationProps {
  data: any;
}

const Destination: React.FC<DestinationProps> = ({ data }) => {
  const [activePage, setActivePage] = useState<string>("moon");
  const [bgImg, setBgImg] = useState<any>(bg_dest);

  const handleActive = (id: string): void => {
    setActivePage(id);
  };

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

  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="hero flex flex-col justify-center items-center align-middle py-28 2xl:h-full lg:h-screen 2xl:py-64 text-white"
    >
      <div className="w-full lg:w-[80%] h-full flex flex-col justify-center items-center align-middle 2xl:gap-20 gap-10 px-5 sm:px-20">
        <h2 className="lg:self-baseline text-xl lg:text-3xl">
          <span className="font-bold">01</span> PICK YOUR DESTINATION
        </h2>
        <div className="w-full h-full flex flex-col lg:justify-end">
          <div className="w-full h-full flex flex-col lg:flex-row lg:gap-8 justify-center items-center align-middle">
            <div
              className={`w-[60%] lg:w-full h-full flex flex-col justify-center text-center lg:text-left items-center lg:items-start align-middle gap-6 relative my-16`}
            >
              {activePage === "moon" && (
                <img
                  alt="moon"
                  src={data.destinations[0].images.webp}
                  className="moon"
                />
              )}
              {activePage === "mars" && (
                <img
                  alt="mars"
                  src={data.destinations[1].images.webp}
                  className="moon"
                />
              )}
              {activePage === "europa" && (
                <img
                  alt="europa"
                  src={data.destinations[2].images.webp}
                  className="moon"
                />
              )}
              {activePage === "titan" && (
                <img
                  alt="titan"
                  src={data.destinations[3].images.webp}
                  className="moon"
                />
              )}
            </div>
            <div className="w-full h-full flex justify-center items-center align-middle">
              <DestMini
                data={data}
                activePage={activePage}
                handleActive={handleActive}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
