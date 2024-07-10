import React from 'react'
import Icon from '../Img/Icon.png'
const Navbar = () => {
  const links =[
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About-Us",
      link:"/about-us",
    },
    {
      title:"All Books",
      link:"/all-books",
    },
    {
      title:"Cart",
      link:"/link",
    },
    {
      title:"Profile",
      link:"/profile",
    },
  ]; 
  return (
    <div className='flex bg-zinc-800 text-white px-8 py-4 items-center justify-between'>
      <div className='flex items-center'>
        <img src={Icon} alt="" className='h-10 me-4' />
        <h1 className='text-2xl font-semibold '><span className='hover:text-red-700 transition-all duration-300'>Book</span>-<span className='hover:text-blue-500 transition-all duration-300'>Store</span></h1></div>
      <div className='nav-links-bookheaven flex items-center gap-4'>
       <div className='flex gap-4'>
       {links.map((items,i)=>(<div className='hover:text-blue-600 transition-all duration-300' 
       key={i}>{items.title}</div>))}
       </div>
       <div className='flex gap-4 '>
        <button className='px-2 py-1 hover:bg-white hover:text-zinc-800 transition-all duration-300 hover:border-none border border-blue-600 rounded'>Login</button>
        <button className='px-2 py-1 hover:bg-white hover:text-zinc-800 transition-all duration-300 hover:border-none bg-blue-500 rounded '>Signup</button>
       </div>
      </div>
    </div>
  )
}

export default Navbar