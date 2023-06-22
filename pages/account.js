import React from 'react'
import Image from 'next/image'

const Account = () => {
    return (
        <>
            <div className='text-center bg-white-chocolate py-50'>
                <h2 className='text-52 xs:text-32 sm:text-32 xxs:text-32 font-semibold'>My Account</h2>
                <p className='flex justify-center items-center font-medium'>Home <Image src='/ic_baseline-keyboard-arrow-right.svg' width={20} height={10} /> <span>Shop</span> <Image src='/ic_baseline-keyboard-arrow-right.svg' width={20} height={10} /><span>My Account</span></p>
            </div>
            <div className='sm:px-15 xs:px-15 xxs:px-15 bg-cultured'>
                <div className='text-center pt-80 '>
                    <h2 className='text-45 sm:text-30 xs:text-30 xxs:text-30 font-semibold'>Login</h2>
                    <p className='text-gray'>Write your username or email address and password to login.</p>
                </div>
                <div className='flex flex-col justify-center items-center pt-20 pb-91'>
                    <input type="text" id="success" class="outline-none bg-transparent border-b placeholder:text-15 italic  block w-2/4 sm:w-full xs:w-full xxs:w-full py-10 " placeholder="Write Your Username Or Email Here * " />
                    <input type="text" id="success" class="outline-none bg-transparent border-b placeholder:text-15 italic  block w-2/4 sm:w-full xs:w-full xxs:w-full pt-20 pb-10 " placeholder="Enter Your Password * " />
                    
                <button className='uppercase mt-10 sm:mb-47 xs:mb-47 xxs:mb-47 text-14  leading-4 font-medium py-10 px-50 bg-black text-white tracking-wider'>Login</button>
                </div>

            </div>
        </>
    )
}

export default Account