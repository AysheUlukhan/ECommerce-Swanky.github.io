import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import photo1 from '../assets/img/slide-foto1.svg'
import photo2 from '../assets/img/slide-foto2.svg'
import photo3 from '../assets/img/slide-foto3.svg'
import photo4 from '../assets/img/slide-foto4.svg'
import footerp3 from '../assets/img/footer-p3.svg'

const Contact = () => {
    return (
        <>
            <div className='text-center bg-white-chocolate py-50'>
                <h2 className='text-52 xs:text-32 sm:text-32 xxs:text-32 font-semibold'>Contact</h2>
                <p className='flex justify-center items-center font-medium'>Home <Image src='/ic_baseline-keyboard-arrow-right.svg' width={20} height={10} /> <span>Contact</span></p>
            </div>

            <div className='lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15 pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 bg-cultured'>

                <div className='flex sm:flex-col xs:flex-col xxs:flex-col gap-x-10'>
                    <div className='flex-col w-3/5 sm:w-full xs:w-full xxs:w-full'>
                        <h2 className='text-40 sm:text-30 xs:text-30 xxs:text-30 font-medium'>Contact Info</h2>
                        <p className='text-gray'>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
                        <div className='flex justify-between sm:flex-col xs:flex-col xxs:flex-col gap-x-5 pt-30'>
                            <div>
                                <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-semibold leading-6 pt-6 capitalize'>Office</h2>
                                <p className='text-14 font-medium leading-4 text-gray pt-15'>370 Glenstone Ave 65802, Springfield, US</p>
                                <p className='text-14 font-medium leading-4 text-gray pt-10'>+123 222 333 44</p>
                                <p className='text-14 font-medium leading-4 text-gray pt-2'>+123 666 777 88</p>
                                <p className='text-14 font-medium leading-4 text-gray pt-10'>swanky@yourinfo.com</p>
                            </div>
                            <div>
                                <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-semibold leading-6 pt-6 capitalize underline'>Management</h2>
                                <p className='text-14 font-medium leading-4 text-gray pt-15'>370 Glenstone Ave 65802, Springfield, US</p>
                                <p className='text-14 font-medium leading-4 text-gray pt-10'>+123 222 333 44</p>
                                <p className='text-14 font-medium leading-4 text-gray pt-2'>+123 666 777 88</p>
                                <p className='text-14 font-medium leading-4 text-gray pt-10'>swanky@yourinfo.com</p>
                            </div>

                        </div>
                    </div>

                    <div className='w-3/6 sm:w-full xs:w-full xxs:w-full sm:pt-30 xs:pt-30 xxs:pt-30'>
                        <form>
                            <h2 className='text-40 sm:text-30 xs:text-30 xxs:text-30 font-medium'>Any Questions?</h2>
                            <p>Use the form below to get in touch with us.</p>

                            <div className='flex sm:flex-col xs:flex-col xxs:flex-col gap-x-5'>
                                <input type="text" id="success" class="outline-none bg-transparent border-b placeholder:text-15 italic  block w-full sm:w-full xs:w-full xxs:w-full py-10 pt-20 " placeholder="Write Your Fullname *" />
                                <input type="email" id="success" class="outline-none bg-transparent border-b placeholder:text-15 italic  block w-full sm:w-full xs:w-full xxs:w-full py-10 pt-20" placeholder="Write Your Email Here *" />

                            </div>
                            <input type="number" id="success" class="outline-none bg-transparent border-b placeholder:text-15 italic  block w-full sm:w-full xs:w-full xxs:w-full py-10 pt-20" placeholder="Phone Number" />

                            <input type="text" id="success" class="outline-none bg-transparent border-b placeholder:text-15 italic  block w-full sm:w-full xs:w-full xxs:w-full py-10 pt-20" placeholder="Write Your Subject Here" />

                            <input type="text" id="success" class="outline-none bg-transparent border-b placeholder:text-15 italic  block w-full sm:w-full xs:w-full xxs:w-full py-10 pt-20" placeholder="Phone Number" />

                            <textarea
                                className="outline-none bg-transparent border-b placeholder:text-15 italic  block w-full sm:w-full xs:w-full xxs:w-full pt-10 "
                                id="exampleFormControlTextarea1"
                                placeholder="Write Your Message Here">

                            </textarea>
                            <button className='py-10 px-50 uppercase bg-black text-white mt-40'>Submit</button>

                        </form>
                    </div>
                </div>

            </div >

            <div className='flex sm:px-15 xs:px-15 xxs:px-15 sm:flex-col xs:flex-col xxs:flex-col  gap-x-10 lg:px-105 xl:px-105 2xl:px-105 pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 md:pt-80 pb-80 bg-cultured'>
                <div >
                    <Image src={footerp3} width={500} />

                </div>
                <div className='w-4/5 md:w-4/5 sm:w-full xs:w-full xxs:w-full pt-80 sm:pt-30 xs:pt-30 xxs:pt-30 md:pt-30'>
                    <div>
                        <h1 className='text-40 xxs:text-30 sm:text-30 xs:text-30 font-semibold'>Our Stores</h1>
                        <p className='text-gray font-medium pt-10'>You can also directly buy products from our stores.</p>
                    </div>

                    <div className='flex sm:flex-col xs:flex-col xxs:flex-col pt-20 gap-x-10 '>
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

export default Contact