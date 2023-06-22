import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';
import Image from 'next/image'
import { product } from '../../pages/product';

const productCarusel = () => {
    SwiperCore.use([Autoplay])
  return (
    <div className='lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15 bg-cultured'>
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay: 2000
      }}
    >
      <SwiperSlide>
          {product.map(item=>
        <div className='text-center'>
            <div class=" h-fit group">

            <div class="relative overflow-hidden">
              <Image class="h-96 w-full object-cover" src={item.image} alt="" />
              <div class="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                <a href='/shop-single' class="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20}/></a>
              </div>
            </div>
          </div>
          <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>{item.title}</h2>
          <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>${item.price}</p>
        </div>
            )}
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className='text-center'>
          <div class=" h-fit group">

            <div class="relative overflow-hidden">
              <Image class="h-96 w-full object-cover" src={photo2} alt="" />
              <div class="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                <a href='/shop-single' class="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20}/></a>
              </div>
            </div>
          </div>
          <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>leather coat</h2>
          <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='text-center'>
          <div class=" h-fit group">

            <div class="relative overflow-hidden">
              <Image class="h-96 w-full object-cover" src={photo3} alt="" />
              <div class="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                <a href='/shop-single' class="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20}/></a>
              </div>
            </div>
          </div>
          <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>Oversize shirt</h2>
          <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='text-center'>
          <div class=" h-fit group">

            <div class="relative overflow-hidden">
              <Image class="h-96 w-full object-cover" src={photo4} alt="" />
              <div class="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                <a href='/shop-single' class="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20}/></a>
              </div>
            </div>
          </div>
          <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>Flora print dress</h2>
          <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='text-center'>
          <div class=" h-fit group">

            <div class="relative overflow-hidden">
              <Image class="h-96 w-full object-cover" src={photo3} alt="" />
              <div class="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                <a href='/shop-single' class="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20}/></a>
              </div>
            </div>
          </div>
          <h2 className='text-22 font-bold leading-6 pt-6'>Orange beanie</h2>
          <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='text-center'>

          <div class=" h-fit group">

            <div class="relative overflow-hidden">
              <Image class="h-96 w-full object-cover" src={photo1} alt="" />
              <div class="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                <a href='/shop-single' class="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20}/></a>
              </div>
            </div>
          </div>
          <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>Flora print dress</h2>
          <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
        </div>
      </SwiperSlide> */}


    </Swiper>

    <div className='pt-42 text-center'>
      <button className='uppercase text-14 font-medium leading-4 py-10 px-50 bg-rich-black text-white '>Shop All</button>
    </div>

    <div class="w-72 h-fit group">

    </div>


  </div>
  )
}

export default productCarusel
