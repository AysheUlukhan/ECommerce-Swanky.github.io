import React, { useState } from 'react'
import Image from 'next/image'
import { product } from '../pages/product'

const Itemproduct = () => {
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
    return (
        <>
            <div className='grid grid-cols-3 gap-y-5 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-x-5 sm:gap-y-5 xs:gap-y-5 xxs:gap-y-5'>
            {records.filter((post)=>{
            return search.toString().toLowerCase() === ''
            ? post
            :post.title.toString().toLowerCase().includes(search);
        })
                .map(post =>
                    <div className='text-center hover:text-venetian-red cursor-pointer'>
                        <div class=" h-fit group">

                            <div class="relative overflow-hidden">
                                <Image class="object-cover" width={400} height={200} src={post.image} alt="" />
                                <div class="absolute gap-x-2 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <button class="bg-white text-black py-10 px-50 uppercase" >Add to cart</button>
                                    <a href='/shop-single' class="bg-white text-black py-12 px-10"><Image src={"ion_scan-sharp.svg"} width={20} height={20} /></a>
                                </div>
                            </div>
                        </div>
                        <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-bold leading-6 pt-6 capitalize'>{post.title}</h2>
                        <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>{post.price}</p>
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
        </>
    )
}

export default Itemproduct