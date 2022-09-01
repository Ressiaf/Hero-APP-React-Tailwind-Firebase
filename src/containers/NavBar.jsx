import React from 'react'
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid'

const navegate = [
    {name: "Search ", href: "/"},
    {name: "Marvel ", href: "/publisher/Marvel%20Comics"},
    {name: "DC Comics", href: "/publisher/DC%20Comics"},
    {name: "Dark Horse",  href: "/publisher/Dark%20Horse%20Comics"},
    {name: "Lucas Art",  href: "/publisher/George%20Lucas"},
    {name: "Star Trek",  href: "/publisher/Star%20Trek"},
    {name: "all publishers",  href: "publisher/allpublisher"},
];
const NavBar = ( ) => {

  return (
    <>
      <nav className='top-0 z-40 w-full bg-black/75 border-b-2 border-gray-200/75 px-2 sm:px-4 py-2.5  '>
            <div className=' flex  flex-col md:flex-row  justify-center items-center'>
            
                      {navegate.map((item) => (
                        <NavLink
                          key={nanoid()} 
                          to={item.href} 
                          className="py-1 px-4 items-center hover:underline underline-offset-8 decoration-red-600 decoration-2"
                        >
                          <span className=" uppercase md:text-xs md:font-medium text-sm font-light text-gray-50">
                            {item.name}
                          </span>
                        </NavLink>
                      ))}
            </div>
      </nav>
    </>
  )
}
export default NavBar
