import React from 'react'
import Icon from '../Img/Icon.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const links =[
    {
      title: "Home",
      link: "/",
    },
    // {
    //   title: "About-Us",
    //   link:"/about-us",
    // },
    {
      title:"All Books",
      link:"/all-books",
    },
    {
      title:"Cart",
      link:"/cart",
    },
    {
      title:"Profile",
      link:"/profile",
    },
  ]; 
  return (
    <div className='flex bg-zinc-800 text-white px-8 py-4 items-center justify-between'>
      <Link to="/" className='flex items-center'>
        <img src={Icon} alt="" className='h-10 me-4' />
        <h1 className='text-2xl font-semibold '><span className='hover:text-red-700 transition-all duration-300'>Book</span>-<span className='hover:text-blue-500 transition-all duration-300'>Store</span></h1>
        </Link>
      <div className='nav-links-bookheaven flex items-center gap-4'>
       <div className='hidden md:flex gap-4'>
       {links.map((items,i)=>(
        <Link to={items.link} className='hover:text-blue-600 transition-all duration-300' 
       key={i}>{items.title}{" "}</Link>))}
       </div>
       <div className='hidden md:flex gap-4 '>
        <Link to='/Login' className='px-4 py-1 hover:bg-white hover:text-zinc-800 transition-all duration-300 hover:border-none border border-blue-600 rounded'>Login</Link>
        <Link to='/signup' className='px-4 py-1 hover:bg-white hover:text-zinc-800 transition-all duration-300 hover:border-none bg-blue-500 rounded '>Signup</Link>
       </div>
      </div>
    </div>
  )
}

export default Navbar