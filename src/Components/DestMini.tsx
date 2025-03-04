import Moon from "../DestPages/Moon";
import MiniNav from "./MiniNav";
import Mars from "../DestPages/Mars";
import Europa from "../DestPages/Europa";
import Titan from "../DestPages/Titan";

interface DestMiniProps {
  data: any;
  activePage: string;
  handleActive: (id: string) => void;
}


const DestMini: React.FC<DestMiniProps> = ({ data, activePage, handleActive }) => {

  return (
    <section className="flex flex-col justify-center items-start align-middle gap-6">
      <MiniNav activePage={activePage} handleActive={handleActive} />

      {activePage === "moon" && <Moon data={data} />}
      {activePage === "mars" && <Mars data={data} />}
      {activePage === "europa" && <Europa data={data} />}
      {activePage === "titan" && <Titan data={data} />}
    </section>
  )
}

export default DestMini;