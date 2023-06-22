import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose, AiTwotoneHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import {BsFillCartFill,BsSearch} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import Image from 'next/image'
import personicon from '../../assets/icons/ion_person.svg'
import searchicon from '../../assets/icons/ion_search.svg'
import hearticon from '../../assets/icons/ion_heart.svg'
import carticon from '../../assets/icons/ion_cart.svg'


const Navbar = () => {
    // const [navbar, setNavbar] = useState(false);
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('black')

    const handleNav = () => {
      setNav(!nav)
    };

    useEffect(()=>{
      const changeColor = () =>{
        if (window.scrollY >= 90) {
          setColor('white');
          setTextColor('black');
        }else{
          setColor('white');
          setTextColor('black');
        }
      };
      window.addEventListener('scroll',changeColor);
    }, []);

  return (

    <div style={{backgroundColor:`${color}`}} className='sticky left-0 top-0 w-full z-10 ease-in duration-300 border-b border-b-white'>
        <div className='m-auto flex justify-around items-center text-black'>
            <ul className='flex sm:hidden xs:hidden xxs:hidden md:hidden uppercase' style={{color:`${textColor}`}}>
                <li>
                    <Link href='/'>Home</Link>
                   <ul className='border border-black p-20 absolute bg-white capitalize text-gray hidden'>
                    <li>
                      <Link href='/shop-single'>Shop Single</Link>
                    </li>
                    <li className='pt-5 '>
                      <Link href='/cart'>Cart</Link>
                    </li>
                    <li className='pt-5 '>
                      <Link href='/account'>My account</Link>
                    </li>
                   </ul>
                </li>
                <li className='ml-32'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='ml-32'>
                    <Link href='/shop'>Shop</Link>
                </li>
                <li className='ml-32'>
                    <Link href='/blog'>Blogs</Link>
                </li>
                <li className='ml-32'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            <div>
              <h2 style={{color:`${textColor}`}} className='text-30 font-medium pt-28 pb-27 uppercase'>Swanky<span className='font-bold text-venetian-red'>.</span></h2>
            </div>

            <div style={{color:`${textColor}`}} className='flex items-center sm:hidden xs:hidden xxs:hidden md:hidden'>
            
              <a href='/account' className='cursor-pointer flex items-center'><FaUserAlt />
              
              <p className='uppercase pl-6 pr-33'>Login</p>
              </a>
              
              <BsSearch/>
              
              <p className='uppercase pl-6 pr-33'>Search...</p>
              {/* <Image src={"/heart.svg"} width={20} height={14}/> */}
              <AiTwotoneHeart/>
              <p className='pr-33 pl-6'>(0)</p>
              <a href='/cart' className='cursor-pointer flex items-center'><BsFillCartFill/>
              
              <p className='pl-6'>(0)</p>
              </a>

            </div>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block xl:hidden lg:hidden 2xl:hidden z-10 '>
          {nav ? <AiOutlineClose size={20} style={{color:`${textColor}`}} />  : 
          <AiOutlineMenu size={20} style={{color:`${textColor}`}} />}
            
        </div>
        {/* Mobile Menu */}
        <div className={nav ? 'lg:hidden xl:hidden 2xl:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center easy-in duration-300 ' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center easy-in duration-300 '}>
        <ul className='uppercase'>
                <li className='font-semibold text-20 p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='font-semibold text-20 p-4'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='font-semibold text-20 p-4'>
                    <Link href='/shop'>Shop</Link>
                </li>
                <li className='font-semibold text-20 p-4'>
                    <Link href='/blogs'>Blogs</Link>
                </li>
                <li className='font-semibold text-20 p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>


        </div>
        </div>
    </div>
  )
}

export default Navbar