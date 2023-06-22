import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';
// import Itemproduct from '../components/Itemproduct';
import photo5 from '../assets/img/quotation.svg'
import { product } from '../pages/product'
import { TfiClose } from 'react-icons/tfi'

const Shop = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 9;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = product.slice(firstIndex, lastIndex);
    const npage = Math.ceil(product.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCPage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }

    const [search, setSearch] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(0);

    const handleClickModal = () => {
        setShowModal(true)
    }

    const [cart, setCart] = useState([]);

    const addToCart = (product, id, price, title) => {
        const newItem = { ...product, amount: 1 }
        const cartItem = cart.find(item => {
            return item.id === id;
        })
        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 }
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem])
        }
    };
    
    console.log(cart)
    SwiperCore.use([Autoplay])
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center m-36 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded-md"
                    >
                        <div className="relative my-6 mx-auto ">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

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

            <div className='flex w-full bg-cover bg-center custom-shop-bg justify-center items-center'>

                <div className='text-center py-80'>
                    <h2 className='text-52 sm:text-32 xs:text-32 xxs:text-32 font-semibold text-white'>Shop</h2>
                    <p className='text-white flex items-center'>Home <Image src='/icons8-forward-30.png' className='text-white mx-5' width={14} height={10} /> <span className='underline'>Shop</span></p>
                </div>
            </div>

            <div className='lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15 pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 bg-cultured'>

                <div className='flex sm:flex-col xs:flex-col xxs:flex-col gap-x-10'>
                    <div className='flex-col w-3/5 sm:w-full xs:w-full xxs:w-full'>
                        <div className='2xl:flex xl:flex lg:flex md:flex 2xl:justify-between xl:justify-between lg:justify-between md:justify-between pb-20 text-gray'>
                            <p>Showing 1-9 of 55 results</p>
                            <p>Default sorting</p>
                        </div>
                        {/* <Itemproduct /> */}
                        <div className='grid grid-cols-3 gap-y-5 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-x-5 sm:gap-y-5 xs:gap-y-5 xxs:gap-y-5'>
                            {records.filter((post) => {
                                return search.toString().toLowerCase() === ''
                                    ? post
                                    : post.title.toString().toLowerCase().includes(search);
                            })
                                .map(post =>
                                    <div className='text-center hover:text-venetian-red cursor-pointer'>
                                        <div class=" h-fit group">

                                            <div class="relative overflow-hidden">
                                                <Image class="object-cover" width={400} height={200} src={post.image} alt="" />
                                                <div class="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                    <button onClick={() => addToCart(product, post.id, post.price, post.title)} class="bg-white text-black py-10 px-50 md:py-5 md:px-25 uppercase" >Add to cart</button>
                                                    <a href='#' onClick={handleClickModal} class="bg-white text-black py-12 px-10 md:py-6 md:px-5"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='pt-15'>
                                            <a href='/shop-single' className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-semibold leading-6  capitalize'>{post.title}</a>
                                            <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>{post.price}</p>
                                        </div>

                                    </div>

                                )}

                        </div>
                        <nav aria-label="Page navigation example" >
                            <ul class="list-style-none flex justify-center items-center pt-40">

                                <li>
                                    <a
                                        class="relative block rounded bg-transparent px-15 py-5 text-sm transition-all duration-300 hover:bg-platinum5 "
                                        aria-label="Previous" onClick={prePage}>

                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                {numbers.map((n, i) =>

                                    <li key={i}>
                                        <a onClick={() => changeCPage(n)}
                                            className={currentPage === n ? "relative block rounded bg-transparent px-15 py-5 text-sm text-neutral-600 transition-all duration-300 hover:bg-platinum5 active" : "relative block rounded bg-transparent px-15 py-5 text-sm text-neutral-600 transition-all duration-300 hover:bg-platinum5"} key={i}

                                        >{n}</a>
                                    </li>
                                )}

                                <li>
                                    <a
                                        class="relative block rounded bg-transparent px-15 py-5 text-sm text-neutral-600 transition-all duration-300 hover:bg-platinum5 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                        aria-label="Next" onClick={nextPage}
                                    ><span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>

                    <div className='w-2/6 sm:w-full xs:w-full xxs:w-full'>
                        <form>
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative ">

                                <input onChange={(e) => setSearch(e.target.value)} type="text" id="success" class="outline-none bg-transparent border-b placeholder:text-15 italic  block w-full sm:w-full xs:w-full xxs:w-full py-10 " placeholder="Search Here.." />
                                <div class="absolute inset-y-0 right-3 pt-3 flex  pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                        </form>
                        <h2 className='text-20 font-medium underline pt-20'>Categories</h2>
                        <ul className='text-gray text-16 '>
                            <li className='underline font-medium pb-8 text-black pt-15'>All</li>
                            <li className='pb-8'>Popular</li>
                            <li className='pb-8'>Accesories</li>
                            <li className='pb-8'>New arrivals</li>
                            <li className='pb-8'>Trending</li>
                        </ul>

                        <h2 className='text-20 font-medium underline pt-20'>Tags</h2>
                        <ul className='text-gray text-16 '>
                            <li className='pb-8 pt-15'>Classic</li>
                            <li className='pb-8'>Tees</li>
                            <li className='pb-8'>Leather coat</li>
                            <li className='pb-8'>Winter</li>
                            <li className='pb-8'>Summer</li>
                            <li className='pb-8'>Modern</li>
                            <li className='pb-8'>Sleeveless</li>
                        </ul>

                        <h2 className='text-20 font-medium underline pt-20'>Filter By Color</h2>
                        <ul className='text-gray text-16 '>
                            <li className='pb-8 pt-15'>Red</li>
                            <li className='pb-8'>Orange</li>
                            <li className='pb-8'>Green</li>
                            <li className='pb-8'>Blue</li>
                            <li className='pb-8'>Black</li>
                        </ul>

                        <h2 className='text-20 font-medium underline pt-20'>Filter By Size</h2>
                        <ul className='text-gray text-16 '>
                            <li className='pb-8 pt-15'>XL</li>
                            <li className='pb-8'>L</li>
                            <li className='pb-8'>M</li>
                            <li className='pb-8'>S</li>
                            <li className='pb-8'>XS</li>
                        </ul>

                        <h2 className='text-20 font-medium underline pt-20'>Filter By Price</h2>
                        <ul className='text-gray text-16 '>
                            <li className='pb-8 pt-15'>Less than $10</li>
                            <li className='pb-8'>$10-$20</li>
                            <li className='pb-8'>$20-$30</li>
                            <li className='pb-8'>$30-$40</li>
                            <li className='pb-8'>$40-$50</li>
                        </ul>
                    </div>
                </div>

            </div >
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

export default Shop