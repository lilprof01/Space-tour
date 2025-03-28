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
  const [activePage, setActivePage] = useState<string>("commander");

  const handleBg = (): void => {
    if (window.innerWidth <= 768 && window.innerWidth > 425) {
      setBgImg(bg_crew_tab);
    } else if (window.innerWidth <= 425) {
      setBgImg(bg_crew_mobile);
    } else {
      setBgImg(bg_crew);
    }
  };

  const handleActive = (id: string): void => {
    setActivePage(id);
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
      <div className="w-full lg:w-[80%] h-full flex flex-col gap-10 md:gap-20 lg:gap-0 lg:flex-row justify-center align-middle px-5">
        <div className="w-full 2xl:h-[80vh] 2xl:py-8 flex flex-col justify-between align-middle items-center text-center lg:text-left lg:items-baseline gap-7 md:gap-20 lg:gap-3">
          <h2 className="lg:self-baseline text-xl lg:text-3xl">
            <span className="font-bold">02</span> MEET YOUR CREW
          </h2>
          {activePage === "commander" && (
            <div className="flex flex-col gap-4 appear">
              <h2 className="text-xl md:text-2xl lg:text-4xl opacity-60">
                {data.crew[0].role}
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl">
                {data.crew[0].name}
              </h1>
              <p className="text-xl text-blue-100">{data.crew[0].bio}</p>
            </div>
          )}
          {activePage === "specialist" && (
            <div className="flex flex-col gap-4 appear">
              <h2 className="text-xl md:text-2xl lg:text-4xl opacity-60">
                {data.crew[1].role}
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl">
                {data.crew[1].name}
              </h1>
              <p className="text-xl text-blue-100">{data.crew[1].bio}</p>
            </div>
          )}
          {activePage === "pilot" && (
            <div className="flex flex-col gap-4 appear">
              <h2 className="text-xl md:text-2xl lg:text-4xl opacity-60">
                {data.crew[2].role}
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl">
                {data.crew[2].name}
              </h1>
              <p className="text-xl text-blue-100">{data.crew[2].bio}</p>
            </div>
          )}
          {activePage === "engineer" && (
            <div className="flex flex-col gap-4 appear">
              <h2 className="text-xl md:text-2xl lg:text-4xl opacity-60">
                {data.crew[3].role}
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl">
                {data.crew[3].name}
              </h1>
              <p className="text-xl text-blue-100">{data.crew[3].bio}</p>
            </div>
          )}
          <div className="selector-container flex gap-6">
            <div
              onClick={() => handleActive("commander")}
              className={`selector h-4 w-4 lg:h-5 lg:w-5 ${
                activePage === "commander" ? "selected" : ""
              }`}
            ></div>
            <div
              onClick={() => handleActive("specialist")}
              className={`selector h-4 w-4 lg:h-5 lg:w-5 ${
                activePage === "specialist" ? "selected" : ""
              }`}
            ></div>
            <div
              onClick={() => handleActive("pilot")}
              className={`selector h-4 w-4 lg:h-5 lg:w-5 ${
                activePage === "pilot" ? "selected" : ""
              }`}
            ></div>
            <div
              onClick={() => handleActive("engineer")}
              className={`selector h-4 w-4 lg:h-5 lg:w-5 ${
                activePage === "engineer" ? "selected" : ""
              }`}
            ></div>
          </div>
        </div>
        <div className="w-full 2xl:flex flex-col 2xl:justify-end justify-center items-center align-middle">
          {activePage === "commander" && (
            <img
              alt="crew"
              src={data.crew[0].images.webp}
              className="h-96 w-96 2xl:w-full 2xl:h-full xl:h-full m-auto appear"
            />
          )}
          {activePage === "specialist" && (
            <img
              alt="crew"
              src={data.crew[1].images.webp}
              className="h-96 w-96 2xl:w-full 2xl:h-full xl:h-full m-auto appear"
            />
          )}
          {activePage === "pilot" && (
            <img
              alt="crew"
              src={data.crew[2].images.webp}
              className="h-96 w-96 2xl:w-full 2xl:h-full xl:h-full m-auto appear"
            />
          )}
          {activePage === "engineer" && (
            <img
              alt="crew"
              src={data.crew[3].images.webp}
              className="h-96 w-96 2xl:w-full 2xl:h-full xl:h-full m-auto appear"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Crew;
