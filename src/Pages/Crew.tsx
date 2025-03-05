import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"
import bg_crew from "/assets/crew/background-crew-desktop.jpg";
import bg_crew_tab from "/assets/crew/background-crew-tablet.jpg";
import bg_crew_mobile from "/assets/crew/background-crew-mobile.jpg";

interface CrewProps {
  data: any;
}

const Crew: React.FC<CrewProps> = ({ data }) => {
  const [bgImg, setBgImg] = useState<any>(bg_crew);

  const handleBg = (): void => {
    if (window.innerWidth <= 768 && window.innerWidth > 425) {
      setBgImg(bg_crew_tab);
    } else if (window.innerWidth <= 425) {
      setBgImg(bg_crew_mobile);
    } else {
      setBgImg(bg_crew);
    }
  };

  useEffect(() => {
    handleBg();
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="hero flex flex-col justify-center items-center align-middle py-28 2xl:h-full lg:h-screen text-white"
    >
      <div className="w-full lg:w-[80%] h-full flex justify-center align-middle px-5">
        <div className="w-full 2xl:h-[80vh] 2xl:py-8 flex flex-col justify-between align-middle">
          <h2 className="lg:self-baseline text-xl lg:text-3xl">
            <span className="font-bold">02</span> MEET YOUR CREW
          </h2>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl opacity-60">{data.crew[0].role}</h2>
            <h1 className="text-6xl">{data.crew[0].name}</h1>
            <p className="text-xl text-blue-100">{data.crew[0].bio}</p>
          </div>
          <div className="selector-container flex gap-6">
            <div className="selector"></div>
            <div className="selector"></div>
            <div className="selector"></div>
            <div className="selector"></div>
          </div>
        </div>
        <div className="w-full 2xl:flex flex-col 2xl:justify-end justify-center items-center align-middle">
          <img alt="crew" src={data.crew[0].images.webp} className="h-96 w-96 2xl:w-full 2xl:h-full xl:h-full m-auto" />
        </div>
      </div>
    </section>
  );
};

export default Crew;
