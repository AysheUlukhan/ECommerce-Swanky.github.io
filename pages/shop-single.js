import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';
import photo1 from '../assets/img/slide-foto1.svg'
import photo2 from '../assets/img/slide-foto2.svg'
import photo3 from '../assets/img/slide-foto3.svg'
import photo4 from '../assets/img/slide-foto4.svg'
import photo5 from '../assets/img/quotation.svg'

const ShopSingle = () => {
  SwiperCore.use([Autoplay])
  const [count, setCount] = useState(0);
  return (
    <>
      <div className='text-center bg-white-chocolate py-50'>
        <h2 className='text-52 xs:text-32 sm:text-32 xxs:text-32 font-semibold'>Shop Single</h2>
        <p className='flex justify-center items-center font-medium'>Home <Image src='/ic_baseline-keyboard-arrow-right.svg' width={20} height={10} /> <span>Shop</span> <Image src='/ic_baseline-keyboard-arrow-right.svg' width={20} height={10} /><span>Shop Single</span></p>
      </div>

      <div className='bg-cultured'>
        <div className='flex pt-150 sm:px-15 xs:px-15 xxs:px-15 sm:flex-col xs:flex-col xxs:flex-col  gap-x-10 lg:px-105 xl:px-105 2xl:px-105  sm:pt-80 xs:pt-80 xxs:pt-80 md:pt-80 pb-80 '>
          <div className='flex gap-x-5'>
            <div>
              <Image src={"/slide-foto2.svg"} width={150} height={150} />
              <Image src={"/slide-foto3.svg"} width={150} height={150} className='pt-20 ' />
              <Image src={"/slide-foto1.svg"} width={150} height={150} className='pt-20' />
            </div>
            <div>
              <Image src={"/slide-foto4.svg"} width={600} height={1} />
            </div>
          </div>
          <div className='w-2/5 md:w-4/5 sm:w-full xs:w-full xxs:w-full pt-80 md:pt-30'>
            <div>
              <h1 className='text-30 font-semibold'>Orange Beanie</h1>
              <div className='flex gap-x-3 pt-5'>
                <Image src={"/ion_star.svg"} width={20} height={20} />
                <Image src={"/ion_star.svg"} width={20} height={20} />
                <Image src={"/ion_star.svg"} width={20} height={20} />
                <Image src={"/ion_star.svg"} width={20} height={20} />
                <Image src={"/ion_star.svg"} width={20} height={20} />
              </div>
              <p className='text-25 font-bold text-venetian-red pt-10'>$12.00 <span className='text-16 text-gray1'>$54.00</span></p>

              <p className='text-gray font-medium pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <hr className='text-gray1 mt-10' />
            </div>

            <div className='flex flex-col pt-20'>
              <div>
                <h2 className='font-bold text-23 underline'>Color</h2>
                <ul className='flex gap-x-5 pt-5'>
                  <li className='underline font-semibold'>Orange</li>
                  <li className='text-gray font-medium'>Green</li>
                  <li className='text-gray font-medium'>Blue</li>
                  <li className='text-gray font-medium'>Black</li>
                </ul>
              </div>

              <div className=' pt-20'>
                <h2 className='font-bold text-20 underline'>Size</h2>
                <ul className='flex gap-x-5 pt-5'>
                  <li className='underline font-semibold'>XL</li>
                  <li className='text-gray font-medium'>L</li>
                  <li className='text-gray font-medium'>M</li>
                  <li className='text-gray font-medium'>S</li>
                </ul>
              </div>

              <div className='pt-20'>
                <h2 className='text-16'>2 in stock</h2>
                <div className='flex gap-x-5'>
                  <div className='flex'>
                    <button className='bg-isabelline px-13 py-13' onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
                    <div className='bg-white px-13 py-13 border border-black'>{count}</div>
                    <button className='bg-white-coffee px-13 py-13' onClick={() => setCount(count + 1)}>+</button>
                  </div>
                  <div>
                    <button className='text-14 bg-rich-black font-medium text-white py-10 px-50 uppercase'>ADD TO CART</button>
                  </div>

                </div>
              </div>
              <div className='pt-20'>
                <p className='font-bold text-18'>SKU: <span className='text-gray font-medium'>1223</span></p>
                <p className='font-bold text-18 pt-10'>Category: <span className='text-gray font-medium'><strong className='underline text-black font-medium'>Women</strong> Popoler, Orange</span></p>
                <p className='font-bold text-18 pt-10'>Tags: <span className='text-gray font-medium'><strong className='underline text-black font-medium'>Classic</strong> Winter, Modern</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-cultured lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15'>
        <ul className='flex justify-center gap-x-10 text-17 font-medium'>
          <li className='underline'>Description</li>
          <li className='text-gray'>Additional Information</li>
          <li className='text-gray'>Reviews (2)</li>
        </ul>
        <hr className='text-timberwolf mt-10' />
        <div className='text-gray pt-30'>
          <h2>Product Description</h2>
          <p className='pt-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
          <p>• It is a long established fact that a reader will be distracted.</p>
          <p>• Lorem Ipsum is that it has a more-or-less normal distribution.</p>
          <p className='pt-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <hr className='text-timberwolf mt-30' />
      </div>


      <div className='lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15  bg-cultured pt-150 sm:pt-80 xs:pt-80 xxs:pt-80'>

        <div className='text-center pb-40'>
          <h2 className='text-52 sm:text-32 xs:text-32 xxs:text-32 font-bold leading-10'>Related Products</h2>
          <p className='text-gray pt-20 text-17'>These are the products that are related with your shop.</p>
        </div>

        <Swiper
          spaceBetween={50}
          breakpoints={
            {
              1536:{
                width:1536,
                slidesPerView:5,
              },
              1280:{
                width:1280,
                slidesPerView:5,
              },
              1024:{
                width:1024,
                slidesPerView:5,
              },
              712:{
                width:712,
                slidesPerView:3,
              },
              540:{
                width:540,
                slidesPerView:2,
              },
              321:{
                width:321,
                slidesPerView:2,
              },
              200:{
                width:200,
                slidesPerView:1,
              },
            }
          }
          loop={true}
          autoplay={{
            delay: 2000

          }}
        >
          <SwiperSlide>
            <div className='text-center'>
              <div class=" h-fit group">

                <div class="relative overflow-hidden">
                  <Image class="h-96 w-full object-cover" src={photo1} alt="" />
                  <div class="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button class="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                    <a href='/shop-single' class="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                  </div>
                </div>
              </div>
              <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-bold leading-6 pt-6 capitalize'>Orange beanie</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-center'>
              <div class=" h-fit group">

                <div class="relative overflow-hidden">
                  <Image class="h-96 w-full object-cover" src={photo2} alt="" />
                  <div class="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button class="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                    <a href='/shop-single' class="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                  </div>
                </div>
              </div>
              <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-bold leading-6 pt-6 capitalize'>leather coat</h2>
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
                    <a href='/shop-single' class="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                  </div>
                </div>
              </div>
              <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-bold leading-6 pt-6 capitalize'>Oversize shirt</h2>
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
                    <a href='/shop-single' class="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                  </div>
                </div>
              </div>
              <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-bold leading-6 pt-6 capitalize'>Flora print dress</h2>
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
                    <a href='/shop-single' class="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                  </div>
                </div>
              </div>
              <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-bold leading-6 pt-6'>Orange beanie</h2>
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
                    <a href='/shop-single' class="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                  </div>
                </div>
              </div>
              <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-bold leading-6 pt-6 capitalize'>Flora print dress</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
            </div>
          </SwiperSlide>


        </Swiper>

        <div className='pt-42 text-center'>
          <button className='uppercase text-14 font-medium leading-4 py-10 px-50 bg-rich-black text-white '>Shop All</button>
        </div>

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

    </>
  )
}

export default ShopSingle