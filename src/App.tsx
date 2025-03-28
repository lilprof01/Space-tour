// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
// import bg_dest from "/assets/destination/background-destination-desktop.jpg";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technologies from "./Pages/Technologies";
import { useEffect, useState } from "react";
import MobileNav from "./Components/MobileNav";

function App() {
  const [openNav, setOpenNav] = useState<Boolean>(false);
  const [data, setData] = useState<any>(null);

  const handleOpenNav = (): void => {
    setOpenNav((prev) => !prev);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return (
      <div
        style={{
          // backgroundImage: `url(${bgImg})`,
        }}
        className="h-screen w-screen text-5xl text-[#410f0f] absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
      >
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <main className="text-white">
        <Header openNav={openNav} handleOpenNav={handleOpenNav} />
        <MobileNav openNav={openNav} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination data={data} />} />
          <Route path="/crew" element={<Crew data={data} />} />
          <Route path="/technologies" element={<Technologies data={data} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
