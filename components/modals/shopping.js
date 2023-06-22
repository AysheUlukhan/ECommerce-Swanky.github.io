import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Shopping = () => {
    const [showModal, setShowModal] = useState(false);


    return (
        <>

{showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
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
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}














        </>
    )
}

export default Shopping