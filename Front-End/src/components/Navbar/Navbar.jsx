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
        <h1 className='text-2xl font-semibold'>PC Books</h1></div>
      <div className='nav-links-bookheaven'>
        {links.map((items,i)=>(<div key={i}>{items.title}</div>))}
      </div>
    </div>
  )
}

export default Navbar