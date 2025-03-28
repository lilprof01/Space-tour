import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"
import bg_tech from "/assets/technology/background-technology-desktop.jpg";
import bg_tech_tab from "/assets/technology/background-technology-tablet.jpg";
import bg_tech_mobile from "/assets/technology/background-technology-mobile.jpg";

interface TechnologiesProps {
  data: any;
}

const Technologies: React.FC<TechnologiesProps> = ({ data }) => {
  const [bgImg, setBgImg] = useState<any>(bg_tech);
  const [activePage, setActivePage] = useState<string>("first");

  const handleBg = (): void => {
    if (window.innerWidth <= 768 && window.innerWidth > 425) {
      setBgImg(bg_tech_tab);
    } else if (window.innerWidth <= 425) {
      setBgImg(bg_tech_mobile);
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
      className="hero flex flex-col justify-center items-center align-middle pt-32 lg:pl-32 pb-10 lg:pb-32 h-screen text-white gap-20"
    >
      <h2 className="lg:self-baseline text-xl lg:text-3xl">
        <span className="font-bold">03</span> SPACE LAUNCH 101
      </h2>
      <div className="h-full w-full flex flex-col-reverse lg:flex-row gap-4">
        <div className="lg:h-2/3 my-auto w-full flex flex-col lg:flex-row justify-center items-center align-middle gap-6 px-8 md:px-20 lg:px-10 text-center lg:text-left">
          <div className="flex lg:flex-col justify-center items-center align-middle gap-10">
            <div
              onClick={() => handleActive("first")}
              className={`${
                activePage === "first" ? "bg-white text-black" : ""
              } h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 rounded-full border border-white flex justify-center items-center align-middle lg:text-4xl hover:cursor-pointer hover:bg-white hover:text-black hover:opacity-80`}
            >
              1
            </div>
            <div
              onClick={() => handleActive("second")}
              className={`${
                activePage === "second" ? "bg-white text-black" : ""
              } h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 rounded-full border border-white flex justify-center items-center align-middle lg:text-4xl hover:cursor-pointer hover:bg-white hover:text-black hover:opacity-80`}
            >
              2
            </div>
            <div
              onClick={() => handleActive("third")}
              className={`${
                activePage === "third" ? "bg-white text-black" : ""
              } h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 rounded-full border border-white flex justify-center items-center align-middle lg:text-4xl hover:cursor-pointer hover:bg-white hover:text-black hover:opacity-80`}
            >
              3
            </div>
          </div>
          {activePage === "first" && (
            <div className="flex flex-col justify-center align-middle gap-2 lg:gap-8">
              <h3 className="text-2xl lg:text-4xl opacity-60">
                THE TERMINOLOGY...
              </h3>
              <h1 className="text-3xl md:text-4xl lg:text-6xl">
                {data.technology[0].name}
              </h1>
              <p className="text-blue-100">{data.technology[0].description}</p>
            </div>
          )}
          {activePage === "second" && (
            <div className="flex flex-col justify-center align-middle gap-2 lg:gap-8">
              <h3 className="text-2xl lg:text-4xl opacity-60">
                THE TERMINOLOGY...
              </h3>
              <h1 className="text-3xl md:text-4xl lg:text-6xl">
                {data.technology[1].name}
              </h1>
              <p className="text-blue-100">{data.technology[1].description}</p>
            </div>
          )}
          {activePage === "third" && (
            <div className="flex flex-col justify-center align-middle gap-2 lg:gap-8">
              <h3 className="text-2xl lg:text-4xl opacity-60">
                THE TERMINOLOGY...
              </h3>
              <h1 className="text-3xl md:text-4xl lg:text-6xl">
                {data.technology[2].name}
              </h1>
              <p className="text-blue-100">{data.technology[2].description}</p>
            </div>
          )}
        </div>
        {activePage === "first" && (
          <div
            style={{
              backgroundImage: `url(${data.technology[0].images.portrait})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="h-full w-full bg-[blue]"
          ></div>
        )}
        {activePage === "second" && (
          <div
            style={{
              backgroundImage: `url(${data.technology[1].images.portrait})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="h-full w-full bg-[blue]"
          ></div>
        )}
        {activePage === "third" && (
          <div
            style={{
              backgroundImage: `url(${data.technology[2].images.portrait})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="h-full w-full bg-[blue]"
          ></div>
        )}
      </div>
    </section>
  );
};

export default Technologies;
