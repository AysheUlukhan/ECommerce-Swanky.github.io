import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';
import photo from 'C:/Users/HP/Desktop/e-commerse-swanky/assets/img/photo.svg'
import photo1 from '../assets/img/slide-foto1.svg'
import photo2 from '../assets/img/slide-foto2.svg'
import photo3 from '../assets/img/slide-foto3.svg'
import photo4 from '../assets/img/slide-foto4.svg'
import photo5 from '../assets/img/quotation.svg'
import photo6 from '../assets/img/photo6.svg'
import stylekick from '../assets/img/StyleKICK.svg'
import NOREMONHANKS from '../assets/img/NOREMON-HANKS.svg'
import fashionMax from '../assets/img/fashionMax.svg'
import woodyland from '../assets/img/woodyland.svg'
import t021 from '../assets/img/t021.svg'
import footerp3 from '../assets/img/footer-p3.svg'

const About = () => {
  SwiperCore.use([Autoplay])
  return (
    <>

      <div className='flex  w-full bg-cover custom-about-bg justify-center items-center'>

        <div className='text-center py-80'>
          <h2 className='text-52 sm:text-32 xs:text-32 xxs:text-32 font-semibold text-white'>About Us</h2>
          <p className='text-white flex items-center'>Home <Image src='/icons8-forward-30.png' className='text-white mx-5' width={14} height={10}/> <span className='underline'>About Us</span></p>
        </div>
      </div>
      <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 bg-cultured'>
        <div className='text-center'>
          <h2 className='uppercase text-32 font-bold'>How was swanky Started?</h2>
          <p className='text-gray 2xl:px-349 xs:px-20 xxs:px-20 sm:px-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

      </div>

      <div className='bg-cultured'>
        <div className='flex items-center justify-center '>

          <div class="grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 2xl:gap-x-32 ">


            <div className='flex flex-col justify-center items-center border border-timberwolf border-x-transparent p-30'>
              <Image src={"/ic_outline-local-shipping.svg"} width={25} height={10} />
              <h3 className='text-22 font-semibold leading-6 pt-10'>Quick delivery</h3>
              <p className='text-gray-nickel text-16 font-normal leading-6 pt-8'>Inside City delivery within 5 days</p>
            </div>



            <div className='flex flex-col justify-center items-center border border-timberwolf border-x-transparent p-30'>
              <Image src={"/ic_outline-shopping-bag.svg"} width={25} height={10} />
              <h3 className='text-22 font-semibold leading-6 pt-10'>Pick up in store</h3>
              <p className='text-gray-nickel text-16 font-normal leading-6 pt-8'>We have option of pick up in store.</p>
            </div>




            <div className='flex flex-col justify-center items-center border border-timberwolf border-x-transparent p-30'>
              <Image src={"/ic_outline-card-giftcard.svg"} width={25} height={10} />
              <h3 className='text-22 font-semibold leading-6 pt-10'>Special packaging</h3>
              <p className='text-gray-nickel text-16 font-normal leading-6 pt-8'>Our packaging is best for products. </p>
            </div>


          </div>
        </div>
      </div>

      <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 bg-cultured '>
        <Image src={photo} />
      </div>

      <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 lg:px-250 xl:px-250 2xl:px-250 sm:px-15 xs:px-15 xxs:px-15 bg-cultured'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000
          }}
        >
          <SwiperSlide>
            <div className='text-center flex flex-col justify-center items-center'>
              <Image src={photo5} />
              <p className='font-normal italic text-24 leading-8 text-philippine-gray'>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi sagittis loreus oncu enim cursus.”</p>
              <div className='flex gap-x-3 pt-31'>
                <Image src={"/ion_star.svg"} width={20} height={20} />
                <Image src={"/ion_star.svg"} width={20} height={20} />
                <Image src={"/ion_star.svg"} width={20} height={20} />
                <Image src={"/ion_star.svg"} width={20} height={20} />
                <Image src={"/ion_star.svg"} width={20} height={20} />
              </div>
              <p className='text-venetian-red font-bold text-14 leading-4 pt-9'>Emma Chamberlin</p>
            </div>
          </SwiperSlide>

          

        </Swiper>
      </div>


      <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 lg:px-105 xl:px-105 2xl:px-105 bg-cultured'>
        <div className='text-center'>
          <h2 className='font-bold text-52 sm:text-32 xs:text-32 xxs:text-32 leading-10'>Recent blogs</h2>
          <p className='text-gray-nickel font-normal text-16 leading-6 pt-6'>Read our news & articles about updates.</p>
        </div>
        <div className='pt-40 flex justify-center text-center'>
          <div className='grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-x-5'>
            <div className='hover:text-venetian-red ease-in duration-300'>
              <Image src={photo6} />
              <h2 className='font-bold text-22 leading-6 pt-14 capitalize'>Best comfortable clothes ideas</h2>
              <p className='font-normal text-16 leading-6 text-gray-nickel pt-4'>Justo maecenas facilisi cursus fermentum enim viverra.</p>
            </div>
            <div className='md:pt-20 hover:text-venetian-red ease-in duration-300'>
              <Image src={photo6} />
              <h2 className='font-bold text-22 leading-6 pt-14 capitalize'>casual denim clothing for women</h2>
              <p className='font-normal text-16 leading-6 text-gray-nickel pt-4'>Sed sed eleifend vel sed elementum pharetra quam.</p>
            </div>
            <div className='md:pt-20 hover:text-venetian-red ease-in duration-300'>
              <Image src={photo6} />
              <h2 className='font-bold text-22 leading-6 pt-14'>Best poses for fashion photo</h2>
              <p className='font-normal text-16 leading-6 text-gray-nickel pt-4'>Viverra fringilla amet quis sollicitudin scelerisque nibh.</p>
            </div>
          </div>
        </div>
        <div className='text-center pt-50'>
          <button className='uppercase font-medium text-14 leading-4 text-white bg-rich-black py-10 px-50 mb-79'>Read all</button>
        </div>
      </div>

      <div className='flex sm:px-15 xs:px-15 xxs:px-15 sm:flex-col xs:flex-col xxs:flex-col  gap-x-10 lg:px-105 xl:px-105 2xl:px-105 pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 md:pt-80 pb-80 bg-cultured'>
        <div>
          {/* <Image src={"/slide-foto4.svg"} width={500} height={1} /> */}
          <Image src={footerp3} width={500}/>
          
        </div>
        <div className='w-4/5 md:w-4/5 sm:w-full xs:w-full xxs:w-full pt-80 sm:pt-30 xs:pt-30 xxs:pt-30 md:pt-30'>
          <div>
            <h1 className='text-40 xxs:text-30 sm:text-30 xs:text-30 font-semibold'>Our Stores</h1>
            <p className='text-gray font-medium pt-10'>You can also directly buy products from our stores.</p>
          </div>

          <div className='flex sm:flex-col xs:flex-col xxs:flex-col pt-20 gap-x-10'>
            <div>
                <h2 className='text-25 font-bold underline'>USA</h2>
                <p className='text-gray pt-10'>730 Glenstone Ave 65802, Springfield, US</p>
                <p className='text-gray pt-7'>+123 222 333 44</p>
                <p className='text-gray'>+123 666 777 88</p>
                <p className='text-gray pt-7'>swanky@yourinfo.com</p>
            </div>
            <div>
              <h2 className='text-25 font-bold underline'>France</h2>
              <p className='text-gray pt-10'>730 Glenstone Ave 65802, Springfield, US</p>
                <p className='text-gray pt-7'>+123 222 333 44</p>
                <p className='text-gray'>+123 666 777 88</p>
                <p className='text-gray pt-7'>swanky@yourinfo.com</p>
            </div>
          </div>
        </div>

      </div>



    </>
  )
}

export default About