// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
// import bg_dest from "/assets/destination/background-destination-desktop.jpg";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technologies from "./Pages/Technologies";
import { useState } from "react";
import MobileNav from "./Components/MobileNav";


function App() {
  const [openNav, setOpenNav] = useState<Boolean>(false)

  const handleOpenNav = (): void => {
    setOpenNav((prev) => !prev)
  };
  

  return (
  <Router>
    <main className="text-white">
    <Header openNav={openNav} handleOpenNav={handleOpenNav} />
    <MobileNav openNav={openNav} />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technologies" element={<Technologies />} />
    </Routes>
  </main>
  </Router>
  )
}

export default App;