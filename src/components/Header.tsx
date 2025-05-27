import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { navigationLinks } from "../constants/navigation";

export const Header = () => {

  const [menu,setMenu] = useState(false);

  return (
    <header className='fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50'>
      <div className='container mx-auto p-4 flex justify-between items-center'>
        <h1 className='text-xl font-bold'><a href="/">handle.com</a></h1>
        <button onClick={() => setMenu(!menu)} className='md:hidden'>
          {menu ? <FaXmark /> : <FaBars />}
        </button>
        <nav className={`${
            menu ? "block" : "hidden"
          } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent`}>
          <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0'>
            {navigationLinks.map((link)=>(
              <li key={link.href}>
                <a href={link.href}>{link.name}</a>          
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
