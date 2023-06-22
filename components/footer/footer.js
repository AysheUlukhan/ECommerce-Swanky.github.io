import React from 'react'
import Image from 'next/image'
import footerf1 from '../../assets/img/footer-f1.svg'
import footerf2 from '../../assets/img/footer-f1.svg'
import footerp3 from '../../assets/img/footer-p3.svg'
import footerf4 from '../../assets/img/footer-f4.svg'
import footerf5 from '../../assets/img/footer-f5.svg'
import footerf6 from '../../assets/img/arcticons_post.svg'
import footerf7 from '../../assets/img/fa-brands_dhl.svg'
import visa from '../../assets/img/brandico_visa.svg'
import masterCard from '../../assets/img/brandico_mastercard.svg'
import paypal from '../../assets/img/fontisto_paypal.svg'
import stylekick from '../../assets/img/StyleKICK.svg'
import NOREMONHANKS from '../../assets/img/NOREMON-HANKS.svg'
import fashionMax from '../../assets/img/fashionMax.svg'
import woodyland from '../../assets/img/woodyland.svg'
import t021 from '../../assets/img/t021.svg'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-cultured'>
      <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15'>
        <div className='border border-y-timberwolf border-x-transparent flex sm:flex-col md:flex-col xs:flex-col xxs:flex-col items-center gap-36 xs:gap-10 sm:gap-10 xxs:gap-10 md:gap-10 py-54 '>
          <div >
            <Image src={stylekick} />
          </div>
          <div>
            <Image src={NOREMONHANKS} />
          </div>
          <div>
            <Image src={fashionMax} />
          </div>
          <div>
            <Image src={woodyland} />
          </div>
          <div>
            <Image src={t021} />
          </div>
        </div>
        <h2 className='capitalize font-bold text-52 sm:text-32 xs:text-32 xxs:text-32 leading-10 text-center pt-80'>Shop our insta</h2>
        <div className='pt-40 flex justify-center'>
          <div className='grid grid-cols-5 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-x-5 sm:gap-y-5 xs:gap-y-5 xxs:gap-y-5 md:gap-y-5'>
            <div >

              <div className='text-center cursor-pointer'>
                <div class="h-fit group">

                  <div class="relative overflow-hidden">
                    <Image class="object-cover" width={400} height={200} src={footerf1} alt="/" />
                    <div class="absolute gap-x-2 h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a href='#' class="text-white text-32 py-12 px-10"><BsInstagram /></a>

                    </div>
                  </div>
                </div>

              </div>


            </div>
            <div>
            <div className='text-center cursor-pointer'>
                <div class="h-fit group">

                  <div class="relative overflow-hidden">
                    <Image class="object-cover" width={400} height={200} src={footerf1} alt="/" />
                    <div class="absolute gap-x-2 h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a href='#' class="text-white text-32 py-12 px-10"><BsInstagram /></a>

                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div>
            <div className='text-center cursor-pointer'>
                <div class="h-fit group">

                  <div class="relative overflow-hidden">
                    <Image class="object-cover" width={400} height={200} src={footerp3} alt="/" />
                    <div class="absolute gap-x-2 h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a href='#' class="text-white text-32 py-12 px-10"><BsInstagram /></a>

                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div>
            <div className='text-center cursor-pointer'>
                <div class="h-fit group">

                  <div class="relative overflow-hidden">
                    <Image class="object-cover" width={400} height={200} src={footerf4} alt="/" />
                    <div class="absolute gap-x-2 h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a href='#' class="text-white text-32 py-12 px-10"><BsInstagram /></a>

                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div>
            <div className='text-center cursor-pointer'>
                <div class="h-fit group">

                  <div class="relative overflow-hidden">
                    <Image class="object-cover" width={400} height={200} src={footerf5} alt="/" />
                    <div class="absolute gap-x-2 h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a href='#' class="text-white text-32 py-12 px-10"><BsInstagram /></a>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className='pt-105 sm:pb-80 xs:pb-80 xxs:pb-80'>
            <div className='mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-2'>
                <div className='mb-5'>
                  <h4 className='text-30 font-medium leading-10'>Swanky<span className='font-bold text-venetian-red'>.</span></h4>
                  <p className='pt-15 text-16 font-normal text-gray-nickel leading-6'>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
                  <input type='email' className='placeholder:text-gray-nickel border border-b-gray-nickel border-t-transparent border-x-transparent outline-0 bg-transparent pt-20' placeholder='Enter your email address...' />
                  <div className='gap-x-7 flex pt-40'>
                    <div><i className="fa-brands fa-facebook-f text-venetian-red"></i></div>
                    <div><i className="fa-brands fa-instagram text-gray-x11"></i></div>
                    <div><i className="fa-brands fa-twitter text-gray-x11"></i></div>
                    <div><i className="fa-brands fa-linkedin-in text-gray-x11"></i></div>
                    <div><i className="fa-brands fa-youtube text-gray-x11"></i></div>
                  </div>
                </div>
                <div className='mb-5'>
                  <h4 className='text-22 font-bold leading-6'>Quick links</h4>
                  <ul>
                    <li className='uppercase text-14 font-bold leading-4 pt-15 underline'>Home</li>
                    <li className='uppercase text-14 font-bold leading-4 pt-8'>About </li>
                    <li className='uppercase text-14 font-bold leading-4 pt-8'>Shop</li>
                    <li className='uppercase text-14 font-bold leading-4 pt-8'>Blogs</li>
                    <li className='uppercase text-14 font-bold leading-4 pt-8'>Contact</li>
                  </ul>
                </div>

                <div className='mb-5'>
                  <h4 className='text-22 font-bold leading-6'>Help & info</h4>
                  <ul>
                    <li className='uppercase text-14 font-bold leading-4 pt-15'>Track Your Order</li>
                    <li className='uppercase text-14 font-bold leading-4 pt-8'>Returns policies </li>
                    <li className='uppercase text-14 font-bold leading-4 pt-8'>Shipping + Delivery </li>
                    <li className='uppercase text-14 font-bold leading-4 pt-8'>Contact Us</li>
                    <li className='uppercase text-14 font-bold leading-4 pt-8'>Faqs</li>
                  </ul>
                </div>


                <div className='mb-5'>
                  <h4 className='text-22 font-bold leading-6'>Contact us</h4>
                  <p className='text-16 font-normal text-gray-nickel pt-15'>Do you have any queries or suggestions?</p>
                  <p className='text-16 font-medium underline'>yourinfo@gmail.com</p>

                  <p className='text-16 font-normal text-gray-nickel pt-14'>If you need support? Just give us a call</p>
                  <p className='text-16 font-medium underline'>+55 111 222 333 44</p>

                </div>
              </div>

            </div>

          </div>
        </footer>


      </div>
      <hr className='text-timberwolf' />
      <div className='bg-cultured flex justify-around sm:flex-col xs:flex-col xxs:flex-col md:flex-col md:items-center sm:px-15 xs:px-15 xxs:px-15 pt-20'>
        <div className='flex sm:flex-col xs:flex-col xxs:flex-col'>
          <p className='text-gray-nickel text-16 pr-10'>We ship with:</p>
          <div className='flex gap-x-3'>
            <Image src={footerf7} />
            <Image src={footerf6} />
          </div>
          <p className='text-gray-nickel text-16 2xl:pl-48 xl:pl-48 lg:pl-48 sm:pt-10 xs:pt-10 xxs:pt-10'>Payment options:</p>
          <div className='flex gap-x-3 2xl:pl-10 xl:pl-10 lg:pl-10'>
            <Image src={visa} />
            <Image src={masterCard} />
            <Image src={paypal} />
          </div>


        </div>
        <div>
          <p className='text-gray-nickel text-16 sm:pt-20 xs:pt-10 xxs:pt-10'>© Copyright 2022 Swanky. Design by <strong className='text-black underline'>TemplatesJungle</strong></p>

        </div>
      </div>
    </div>
  )
}

export default Footer