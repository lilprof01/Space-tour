// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/assets/Subtract.svg';

interface headerProps{
  openNav: Boolean,
  handleOpenNav: React.MouseEventHandler<HTMLDivElement> | undefined,
}

const Header: React.FC<headerProps> = ({ openNav, handleOpenNav }) => {

  return (
    <header className="header fixed left-0 top-0 w-full flex items-center justify-between align-middle px-6 py-8 sm:p-0 z-[100]">
      {/* header and navs */}
      <div className="lg:w-full hover:cursor-pointer sm:pl-8">
        <img alt='logo' src={logo} className='h-10 w-10 logo' />
      </div>

      <div className='hr h-[1px] lg:w-[43vw] bg-[#979797] opacity-50 lg:absolute z-50 lg:left-32 hidden lg:block'></div>

      <nav className='nav-container px-8 sm:flex justify-end items-center align-middle bg-transparent w-[85vw] lg:w-full hidden'>
        <ul className='flex justify-between items-center align-middle gap-8 text-white text-[16px]'>
          <NavLink to="/" end id='home' className='nav-links py-8'><span className='font-bold'>00</span> HOME</NavLink>
          <NavLink to="/destination" id='destination' className='nav-links py-8'><span className='font-bold'>01</span> DESTINATION</NavLink>
          <NavLink to="crew" id='crew' className='nav-links py-8'><span className='font-bold'>02</span> CREW</NavLink>
          <NavLink to="technologies" id='technology' className='nav-links py-8'><span className='font-bold'>03</span> TECHNOLOGY</NavLink>
        </ul>
      </nav>

      {/* hamburger for mobile */}
      <div onClick={handleOpenNav} className={`hamburger h-10 w-10 sm:hidden flex flex-col justify-center items-end align-middle z-[100] hover:cursor-pointer`}>
        <div className={`h-1 w-12 bg-blue-300 ${openNav ? 'burger1' : 'burger-1'}`}></div>
        <div className={`h-1 w-8 bg-blue-300 ${openNav ? 'invisible' : 'show'}`}></div>
        <div className={`h-1 w-6 bg-blue-300 ${openNav ? 'burger2' : 'burger-2'}`}></div>
      </div>
    </header>
  )
}

export default Header