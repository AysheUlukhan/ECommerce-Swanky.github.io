import React, { useState } from 'react'
import Image from 'next/image'
import close from '../assets/icons/close.png'

const Checkout = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className='text-center bg-white-chocolate py-50'>
                <h2 className='text-52 xs:text-32 sm:text-32 xxs:text-32 font-semibold'>Checkout</h2>
                <p className='flex justify-center items-center font-medium'>Home <Image src='/ic_baseline-keyboard-arrow-right.svg' width={20} height={10} /> <span>Checkout</span></p>
            </div>

            <div class="flex justify-center bg-cultured pt-150 sm:px-15 xs:px-15 xxs:px-15 sm:pt-80 xs:pt-80 xxs:pt-80">
                <div class="w-75per">
                    <div class="lg:grid md:grid 2xl:grid xl:grid grid-cols-2 gap-20">
                        <div>
                            <h6 class="font-medium text-32 ">
                                Billing Details
                            </h6>

                            <form action="">
                                <div class="flex flex-col mb-20">
                                    <label class=" text-black text-opacity-80 font-medium">First name *</label>
                                    <input class="w-full border-b bg-transparent py-10 outline-none text-14 leading-4"
                                        type="text" />
                                </div>

                                <div class="flex flex-col mb-20">
                                    <label class=" text-black text-opacity-80 font-medium">Last name *</label>
                                    <input class="w-full border-b bg-transparent outline-none py-10 text-14 leading-4"
                                        type="text" />
                                </div>

                                <div class="flex flex-col mb-20">
                                    <label class=" text-black text-opacity-80 font-medium">Company name (optional)</label>
                                    <input class="w-full border-b bg-transparent outline-none py-10 text-14 leading-4"
                                        type="text" />
                                </div>

                                <div class="flex flex-col mb-20">
                                    <label class=" mb-10 text-black text-opacity-80 font-medium">Strett address *</label>
                                    <input class="w-full border-b bg-transparent outline-none py-14 text-10 leading-4 placeholder:text-14 italic"
                                        type="text" placeholder='House number and street name' />
                                    <input class="w-full border-b bg-transparent outline-none py-14 text-10 leading-4 placeholder:text-14 italic"
                                        type="text" placeholder='Appartments, suite, etc' />
                                </div>

                                <div class="flex flex-col mb-20">
                                    <label class=" text-black text-opacity-80 font-medium">Town / City *</label>
                                    <input class="w-full border-b bg-transparent outline-none py-10 text-14 leading-4"
                                        type="text" />
                                </div>

                                <div class="flex flex-col mb-20">
                                    <label class=" text-black text-opacity-80 font-medium">State *</label>
                                    <input class="w-full border-b bg-transparent outline-none py-10 text-14 leading-4"
                                        type="text" />
                                </div>

                                <div class="flex flex-col mb-20">
                                    <label class=" text-black text-opacity-80 font-medium">ZIP Code *</label>
                                    <input class="w-full border-b bg-transparent outline-none py-10 text-14 leading-4"
                                        type="password" />
                                </div>

                                <div class="flex flex-col mb-20">
                                    <label class=" text-black text-opacity-80 font-medium">Phone *</label>
                                    <input class="w-full border-b bg-transparent outline-none py-10 text-14 leading-4"
                                        type="number" />
                                </div>

                                <div class="flex flex-col mb-20">
                                    <label class=" text-black text-opacity-80 font-medium">Email address *</label>
                                    <input class="w-full border-b bg-transparent outline-none py-10 text-14 leading-4"
                                        type="email" />
                                </div>


                            </form>


                        </div>

                        <div class=" sm:pt-20 xs:pt-20 xxs:pt-20 sm:pb-29 xs:pb-29 xxs:pb-29">
                            <h6 class="font-medium text-32">Additional Information</h6>


                            <form action="">
                                <div class="flex flex-col mb-20">
                                    <label class=" text-black text-opacity-80 font-medium">Order notes (optional)</label>
                                    <input class="w-full border-b bg-transparent outline-none py-10 text-14 leading-4 placeholder:text-13 italic"
                                        type="text" placeholder='Notes about your order. Like special notes for delivery.' />
                                </div>

                            </form>
                        </div>

                    </div>


                    <div class="flex flex-col">
                        <div class=" sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full text-left text-sm font-light">
                                        <thead class="border-b border-b-timberwolf font-medium dark:border-neutral-500 ">
                                            <tr>

                                                <th scope="col" class=" py-4">Product</th>
                                                <th scope="col" class="px-6 py-4">Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-b-timberwolf">
                                                <td class="whitespace-nowrap text-gray px-6 py-20 font-medium">Orange Beanie + 1</td>
                                                <td class="whitespace-nowrap px-6 py-20 text-venetian-red font-bold">$12.00</td>

                                            </tr>
                                            <tr class="border-b border-b-timberwolf">
                                                <td class="whitespace-nowrap px-6 text-gray  py-20 font-medium">Flora print Dress + 1</td>
                                                <td class="whitespace-nowrap px-6 py-20 text-venetian-red font-bold">$14.00</td>
                                            </tr>
                                            <tr class="border-b border-b-timberwolf">
                                                <td class="whitespace-nowrap px-6 py-20 font-medium">Subtotal</td>
                                                <td class="whitespace-nowrap px-6 py-20 text-venetian-red font-bold">$26.00</td>
                                            </tr>

                                            <tr class="border-b border-b-timberwolf">
                                                <td class="whitespace-nowrap px-6 py-20 font-medium">Total</td>
                                                <td class="whitespace-nowrap px-6 py-20 text-venetian-red font-bold">$26.00</td>

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-20'>
                        <div class="flex border-b border-b-timberwolf pb-20">
                            <div class="flex items-center pr-20">
                            <input id="default-radio-1" type="radio" value="" name="default-radio"/>
                            
                            </div>
                            <div class="ml-2">
                                <label for="helper-radio" class="font-medium text-18">Direct Bank Transfer</label>
                                <p id="helper-radio-text" class="text-14 font-normal text-gray">For orders shipped from $25 in books or $29 in other categories</p>
                            </div>
                        </div>

                        <div class="flex border-b border-b-timberwolf py-20">
                            <div class="flex items-center pr-20">
                            <input id="default-radio-1" type="radio" value="" name="default-radio"/>
                            
                            </div>
                            <div class="ml-2 ">
                                <label for="default-radio" class="font-medium text-18">Check Payments</label>
                                
                            </div>
                        </div>

                        <div class="flex border-b border-b-timberwolf py-20">
                            <div class="flex items-center pr-20">
                            <input id="default-radio-1" type="radio" value="" name="default-radio"/>
                            
                            </div>
                            <div class="ml-2 ">
                                <label for="default-radio" class="font-medium text-18">Cash On Delivery</label>
                                
                            </div>
                        </div>

                        <div class="flex border-b border-b-timberwolf py-20">
                            <div class="flex items-center pr-20">
                            <input id="default-radio-1" type="radio" value="" name="default-radio"/>
                            
                            </div>
                            <div class="ml-2 ">
                                <label for="default-radio" class="font-medium text-18">PayPal</label>
                                
                            </div>
                        </div>

                        <button className='uppercase py-10 px-50 bg-rich-black text-white mt-30'>Place Order</button>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Checkout