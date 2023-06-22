import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';
import Image from 'next/image'
import productCarusel from '../carusel/productCarusel';
import photo from 'C:/Users/HP/Desktop/e-commerse-swanky/assets/img/photo.svg'
import photo1 from '../../assets/img/slide-foto1.svg'
import photo2 from '../../assets/img/slide-foto2.svg'
import photo3 from '../../assets/img/slide-foto3.svg'
import photo4 from '../../assets/img/slide-foto4.svg'
import photo5 from '../../assets/img/quotation.svg'
import photo6 from '../../assets/img/photo6.svg'
import { TfiClose } from 'react-icons/tfi';


const Mainpage = () => {

  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);

  const handleClickModal = () => {
    setShowModal(true)
  }


  SwiperCore.use([Autoplay])
  return (
    <>

      {showModal ? (
        <>
          <div
            className="justify-center m-36 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded-md"
          >
            <div className="relative my-6 mx-auto ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                <div className='bg-cultured'>


                  <div>
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
                      <div>
                        <TfiClose onClick={() => setShowModal(false)} className='cursor-pointer' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div>
        <div className='flex justify-center items-center h-screen bg-fixed bg-center bg-cover custom-img '>
          <div className='text-center'>
            <h2 className='text-42 lg:text-73  font-bold leading-85 capitalize text-white leading-10 font-sans'>Make your fashion </h2>
            <h2 className='text-42 lg:text-73 font-bold leading-85 capitalize text-white'>look swanky.</h2>
            <button className='text-14 leading-4 bg-white font-medium text-rich-black tracking-wider py-10 px-50 mt-36 uppercase'>Shop now</button>
          </div>
        </div>
        <div className='bg-cultured'>
          <div className='flex items-center justify-center '>

            <div className="grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 2xl:gap-x-32 ">


              <div className="">
                <div className="flex ">
                  <div className="flex items-center sm:mb-30 xs:mb-30 xxs:mb-30">
                    <div className='text-center border border-timberwolf border-x-transparent p-30'>
                      <i className="fa-solid fa-truck text-venetian-red"></i>
                      <h3 className='text-22 font-semibold leading-6 pt-20'>Quick delivery</h3>
                      <p className='text-gray-nickel text-16 font-normal leading-6 pt-8'>Inside City delivery within 5 days</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="">
                <div className="flex flex-col">
                  <div className="flex items-center sm:mb-30 xs:mb-30 xxs:mb-30">
                    <div className='text-center border border-timberwolf border-x-transparent p-30'>
                      <i className="fa-solid fa-truck text-venetian-red"></i>
                      <h3 className='text-22 font-semibold leading-6 pt-20'>Quick delivery</h3>
                      <p className='text-gray-nickel text-16 font-normal leading-6 pt-8'>Inside City delivery within 5 days</p>
                    </div>
                  </div>

                </div>
              </div>


              <div className="">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className='text-center border border-timberwolf border-x-transparent p-30'>
                      <i className="fa-solid fa-truck text-venetian-red"></i>
                      <h3 className='text-22 font-semibold leading-6 pt-20'>Quick delivery</h3>
                      <p className='text-gray-nickel text-16 font-normal leading-6 pt-8'>Inside City delivery within 5 days</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='pt-150 bg-cultured'>
          <div className='text-center '>
            <h2 className='text-52 sm:text-32 xs:text-32 xxs:text-32 font-bold leading-10'>What’s Trending</h2>
            <p className='text-gray-nickel text-16 font-normal leading-6 pt-6 pb-40'>These are the products that are trending now.</p>
          </div>

          <div className='lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15 bg-cultured'>
            <Swiper
              spaceBetween={50}
              breakpoints={
                {
                  1536: {
                    width: 1536,
                    slidesPerView: 5,
                  },
                  1280: {
                    width: 1280,
                    slidesPerView: 5,
                  },
                  1024: {
                    width: 1024,
                    slidesPerView: 5,
                  },
                  712: {
                    width: 712,
                    slidesPerView: 3,
                  },
                  540: {
                    width: 540,
                    slidesPerView: 2,
                  },
                  321: {
                    width: 321,
                    slidesPerView: 2,
                  },
                  200: {
                    width: 200,
                    slidesPerView: 1,
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
                  <div className="h-fit group">

                    <div className="relative overflow-hidden">
                      <Image className="h-96 w-full object-cover" src={photo1} alt="foto" />
                      <div className="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                        <a href='#' onClick={handleClickModal} className="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                      </div>
                    </div>
                  </div>
                  <div className='pt-6'>
                  <a href='/shop-single' className='text-22 font-bold leading-6 capitalize hover:underline'>Orange beanie</a>
                  <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='text-center'>
                  <div className=" h-fit group">

                    <div className="relative overflow-hidden">
                      <Image className="h-96 w-full object-cover" src={photo2} alt="foto" />
                      <div className="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                        <a href='#' onClick={handleClickModal} className="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                      </div>
                    </div>
                  </div>
                  <div className='pt-6'>
                  <a href='/shop-single' className='text-22 font-bold leading-6 capitalize hover:underline'>leather coat</a>
                  <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='text-center'>
                  <div className=" h-fit group">

                    <div className="relative overflow-hidden">
                      <Image className="h-96 w-full object-cover" src={photo3} alt="foto" />
                      <div className="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                        <a href='#' onClick={handleClickModal} className="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                      </div>
                    </div>
                  </div>
                  <div className='pt-6'>
                  <a href='shop-single' className='text-22 font-bold leading-6 capitalize hover:underline'>Oversize shirt</a>
                  <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='text-center'>
                  <div className=" h-fit group">

                    <div className="relative overflow-hidden">
                      <Image className="h-96 w-full object-cover" src={photo4} alt="foto" />
                      <div className="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                        <a href='#' onClick={handleClickModal} className="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                      </div>
                    </div>
                  </div>
                  <div className='pt-6'>
                  <a href='/shop-single' className='text-22 font-bold leading-6 capitalize hover:underline'>Flora print dress</a>
                  <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='text-center'>
                  <div className=" h-fit group">

                    <div className="relative overflow-hidden">
                      <Image className="h-96 w-full object-cover" src={photo3} alt="foto" />
                      <div className="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                        <a href='#' onClick={handleClickModal} className="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                      </div>
                    </div>
                  </div>
                  <div className='pt-6'>
                  <a href='/shop-single' className='text-22 font-bold leading-6 hover:underline'>Orange beanie</a>
                  <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='text-center'>

                  <div className=" h-fit group">

                    <div className="relative overflow-hidden">
                      <Image className="h-96 w-full object-cover" src={photo1} alt="foto" />
                      <div className="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                        <a href='#' onClick={handleClickModal} className="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                      </div>
                    </div>
                  </div>
                  <div className='pt-6'>
                  <a href='/shop-single' className='text-22 font-bold leading-6 hover:underline'>Orange beanie</a>
                  <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
                  </div>
                </div>
              </SwiperSlide>


            </Swiper>

            <div className='pt-42 text-center'>
              <button className='uppercase text-14 font-medium leading-4 py-10 px-50 bg-rich-black text-white '>Shop All</button>
            </div>

            <div className="w-72 h-fit group">

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
                <div className='flex pt-31'>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <p className='text-venetian-red font-bold text-14 leading-4 pt-9'>Emma Chamberlin</p>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        {/* <sliderProduct /> */}





        <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 bg-cultured'>
          <div className='text-center '>
            <h2 className='text-52 sm:text-32 xs:text-32 xxs:text-32 font-bold leading-10'>New arrivals</h2>
            <p className='text-gray-nickel text-16 font-normal leading-6 pt-6 pb-40'>These are the products that are trending now.</p>
          </div>
        </div>

        <div className='lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15 bg-cultured'>
          <Swiper
            spaceBetween={50}
            breakpoints={
              {
                1536: {
                  width: 1536,
                  slidesPerView: 5,
                },
                1280: {
                  width: 1280,
                  slidesPerView: 5,
                },
                1024: {
                  width: 1024,
                  slidesPerView: 5,
                },
                712: {
                  width: 712,
                  slidesPerView: 3,
                },
                540: {
                  width: 540,
                  slidesPerView: 2,
                },
                321: {
                  width: 321,
                  slidesPerView: 2,
                },
                200: {
                  width: 200,
                  slidesPerView: 1,
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
                <div className=" h-fit group">

                  <div className="relative overflow-hidden">
                    <Image className="h-96 w-full object-cover" src={photo1} alt="foto" />
                    <div className="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                      <a href='/shop-single' className="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} alt="foto" /></a>
                    </div>
                  </div>
                </div>
                <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>Orange beanie</h2>
                <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='text-center'>
                <div className=" h-fit group">

                  <div className="relative overflow-hidden">
                    <Image className="h-96 w-full object-cover" src={photo2} alt="foto" />
                    <div className="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                      <a href='#' onClick={handleClickModal} className="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} alt="foto" /></a>
                    </div>
                  </div>
                </div>
                <div className='pt-6'>
                <a href='/shop-single' className='text-22 font-bold leading-6 capitalize hover:underline'>leather coat</a>
                <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='text-center'>
                <div className=" h-fit group">

                  <div className="relative overflow-hidden">
                    <Image className="h-96 w-full object-cover" src={photo3} alt="foto" />
                    <div className="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                      <a href='#' onClick={handleClickModal} className="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} alt="foto" /></a>
                    </div>
                  </div>
                </div>
                <div className='pt-6'>
                <a href='/single-shop' className='text-22 font-bold leading-6 capitalize hover:underline'>Oversize shirt</a>
                <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='text-center'>
                <div className=" h-fit group">

                  <div className="relative overflow-hidden">
                    <Image className="h-96 w-full object-cover" src={photo4} alt="foto" />
                    <div className="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                      <a href='#' onClick={handleClickModal} className="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} alt="foto" /></a>
                    </div>
                  </div>
                </div>
                <div className='pt-6'>
                <a href='/shop-single' className='text-22 font-bold leading-6 hover:underline capitalize'>Flora print dress</a>
                <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='text-center'>
                <div className=" h-fit group">

                  <div className="relative overflow-hidden">
                    <Image className="h-96 w-full object-cover" src={photo3} alt="foto" />
                    <div className="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                      <a href='#' onClick={handleClickModal} className="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} alt="foto" /></a>
                    </div>
                  </div>
                </div>
                <div className='pt-6'>
                <a href='/shop-single' className='text-22 font-bold leading-6 capitalize hover:underline'>Orange beanie</a>
                <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='text-center'>

                <div className=" h-fit group">

                  <div className="relative overflow-hidden">
                    <Image className="h-96 w-full object-cover" src={photo1} alt="foto" />
                    <div className="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="bg-white text-black py-10 px-50 uppercase">Add to cart</button>
                      <a href='#' onClick={handleClickModal} className="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} alt="foto" /></a>
                    </div>
                  </div>
                </div>
                <div className='pt-6'>
                <a href='/shop-single' className='text-22 font-bold leading-6 hover:underline capitalize'>Flora print dress</a>
                <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
                </div>
              </div>
            </SwiperSlide>


          </Swiper>

          <div className='pt-42 text-center'>
            <button className='uppercase text-14 font-medium leading-4 py-10 px-50 bg-rich-black text-white '>Shop All</button>
          </div>

          <div className="w-72 h-fit group">

          </div>


        </div>



        <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 bg-cultured '>
          <div className=''>
            <div className='grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1'>
              <div className='outfits-foto1 flex flex-col justify-center items-start 2xl:pl-108 xl:pl-108 lg:pl-108 md:pl-108 sm:pl-20 xs:pl-20 xxs:pl-20 bg-center bg-cover '>
                <h2 className='capitalize font-bold text-62 sm:text-32 xs:text-32 xxs:text-32 text-white pt-250'>Summer outfits</h2>
                <button className='uppercase sm:mb-47 xs:mb-47 xxs:mb-47 md:mb-47 text-14  leading-4 font-medium py-10 px-50 bg-white text-rich-black tracking-wider'>Shop collection</button>
              </div>
              <div className='2xl:ml-20 xl:ml-20 lg:ml-20 md:mt-20 sm:mt-20 xs:mt-20 xxs:mt-20'>
                <div className='outfits-foto2 flex flex-col justify-center items-start 2xl:pl-108 xl:pl-108 lg:pl-108 md:pl-108 sm:pl-20 xs:pl-20 xxs:pl-20 h-380  bg-center bg-cover '>
                  <h2 className='capitalize font-bold text-62 sm:text-32 xs:text-32 xxs:text-32 text-white'>gugles</h2>
                  <button className='uppercase text-14 leading-4 font-medium py-10 px-50 border border-white text-white tracking-wider'>Shop it now</button>
                </div>
                <div className='outfits-foto3 flex flex-col justify-center items-start 2xl:pl-108 xl:pl-108 lg:pl-108 md:pl-108 sm:pl-20 xs:pl-20 xxs:pl-20 h-380  bg-center bg-cover mt-20'>
                  <h2 className='capitalize font-bold text-62 sm:text-32 xs:text-32 xxs:text-32 text-white'>accessories</h2>
                  <button className='uppercase text-14 leading-4 font-medium py-10 px-50 border border-white text-white tracking-wider'>Shop collection</button>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 lg:px-105 xl:px-105 2xl:px-105 bg-cultured '>
          <div className='text-center'>
            <h2 className='font-bold text-52 sm:text-32 xs:text-32 xxs:text-32 leading-10'>Recent blogs</h2>
            <p className='text-gray-nickel font-normal text-16 leading-6 pt-6'>Read our news & articles about updates.</p>
          </div>
          <div className='pt-40 flex justify-center text-center'>
            <div className='grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-x-5 '>
              <div className='hover:text-venetian-red ease-in duration-300'>
                <Image src={photo6} alt="foto" />
                <h2 className='font-bold text-22 leading-6 pt-14 capitalize'>Best comfortable clothes ideas</h2>
                <p className='font-normal text-16 leading-6 text-gray-nickel pt-4'>Justo maecenas facilisi cursus fermentum enim viverra.</p>
              </div>
              <div className='md:pt-20 hover:text-venetian-red ease-in duration-300'>
                <Image src={photo6} alt="foto" />
                <h2 className='font-bold text-22 leading-6 pt-14 capitalize'>casual denim clothing for women</h2>
                <p className='font-normal text-16 leading-6 text-gray-nickel pt-4'>Sed sed eleifend vel sed elementum pharetra quam.</p>
              </div>
              <div className='md:pt-20 hover:text-venetian-red ease-in duration-300'>
                <Image src={photo6} alt="foto" />
                <h2 className='font-bold text-22 leading-6 pt-14'>Best poses for fashion photo</h2>
                <p className='font-normal text-16 leading-6 text-gray-nickel pt-4'>Viverra fringilla amet quis sollicitudin scelerisque nibh.</p>
              </div>
            </div>
          </div>
          <div className='text-center pt-50'>
            <button className='uppercase font-medium text-14 leading-4 text-white bg-rich-black py-10 px-50'>Read all</button>
          </div>
        </div>

      </div>
    </>

  )
}

export default Mainpage