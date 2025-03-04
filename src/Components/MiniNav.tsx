interface MiniNavProps {
  activePage: string;
  handleActive: (id: string) => void;
}

const MiniNav: React.FC<MiniNavProps> = ({ activePage, handleActive }) => {
  return (
    <nav className="mini-nav self-center lg:self-start">
      <ul className='flex justify-between items-center align-middle gap-8 text-white text-[16px]'>
          <li onClick={() => handleActive("moon")} id='moon' className={`nav-links py-3 ${activePage === "moon" ? 'active' : ''}`}>MOON</li>
          <li onClick={() => handleActive("mars")} id='mars' className={`nav-links py-3 ${activePage === "mars" ? 'active' : ''}`}>MARS</li>
          <li onClick={() => handleActive("europa")} id='europa' className={`nav-links py-3 ${activePage === "europa" ? 'active' : ''}`}>EUROPA</li>
          <li onClick={() => handleActive("titan")} id='titan' className={`nav-links py-3 ${activePage === "titan" ? 'active' : ''}`}>TITAN</li>
        </ul>
    </nav>
  )
}

export default MiniNav;