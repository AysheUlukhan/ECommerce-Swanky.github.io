import React, {useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
// import ItemBlogProduct from '../components/ItemBlogProduct';
import { blogProduct } from './blogProduct';
import Shopping from '@/components/modals/shopping';
import { TfiClose } from 'react-icons/tfi'
const Blog = () => {

  // const [cart, setCart] = useState([]);

  // const handleClick = (post) =>{
  //   cart.push(post);
  //   console.log(cart)
  // }


  // const [records, setRecords] = useState(blogProduct);

  // function handleFilter(event) {
  //   const newData = blogProduct.filter(row => {
  //     return row.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
  //   })
  //   setRecords(newData)

  //   console.log(newData)
  // }
  // onChange={handleFilter}

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = blogProduct.slice(firstIndex, lastIndex);
  const npage = Math.ceil(blogProduct.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const [search, setSearch] = useState('');

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


  return (
    <>

      <div className='flex w-full bg-cover bg-center custom-blog-bg justify-center items-center'>

        <div className='text-center py-80'>
          <h2 className='text-52 sm:text-32 xs:text-32 xxs:text-32 font-semibold text-white'>Blog</h2>
          <p className='text-white flex items-center'>Home <Image alt='/' src='/icons8-forward-30.png' className='text-white mx-5' width={14} height={10} /> <span className='underline'>Blog</span></p>
        </div>
      </div>

      <div className='lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15 pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 bg-cultured'>

        <div className='flex sm:flex-col xs:flex-col xxs:flex-col gap-x-10'>
          <div className='flex-col w-3/5 sm:w-full xs:w-full xxs:w-full'>
            
            {/* <ItemBlogProduct/> */}
            <div className='grid grid-cols-3 gap-y-5 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-x-5 sm:gap-y-5 xs:gap-y-5 xxs:gap-y-5'>
              {records.filter((post) => {
                return search.toString().toLowerCase() === ''
                  ? post
                  : post.title.toString().toLowerCase().includes(search);
              })
                .map(post =>
                  <div className='text-center hover:text-venetian-red cursor-pointer py-30'>
                      <Image class="object-cover" width={400} height={200} src={post.image} alt="/" />
                    <div className='pt-15'>
                      <a href='/shop-single' className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-semibold leading-6  capitalize'>{post.title}</a>
                      <p className='font-medium text-14 leading-4 text-gray pt-8'>{post.desc}</p>
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

            <h2 className='text-20 font-medium underline pt-20'>Latest Posts</h2>
            <ul className=' text-16 '>
              <li className='pb-8 pt-15'>
                <a className='flex items-center gap-x-3 hover:text-venetian-red ease-in duration-300'>
                  <Image src={"/photo6.svg"} width={100} height={30} />
                  <p className='text-16 font-medium'>Feel Cool <br /> While Walking <br /> In Street</p>
                </a>
              </li>
              <li className='pb-8'>
                <a className='flex items-center gap-x-3 hover:text-venetian-red ease-in duration-300'>
                  <Image src={"/photo6.svg"} width={100} height={30} />
                  <p className='text-16 font-medium'>Feel Cool <br /> While Walking <br /> In Street</p>
                </a>
              </li>
              <li className='pb-8'>
                <a className='flex items-center gap-x-3 hover:text-venetian-red ease-in duration-300'>
                  <Image src={"/photo6.svg"} width={100} height={30} />
                  <p className='text-16 font-medium'>Feel Cool <br /> While Walking <br /> In Street</p>
                </a>
              </li>
            </ul>

            <h2 className='text-20 font-medium underline pt-20'>Social Links</h2>
            <ul className='text-gray text-16 '>
              <li className='pb-8 pt-15'>
                <Link href={"https://www.facebook.com/"} target='_blank'>Facebook</Link>
              </li>
              <li className='pb-8'>
                <Link href={"https://www.instagram.com/"} target='_blank'>Instagram</Link>
              </li>
              <li className='pb-8'>
                <Link href={"https://www.twitter.com/"} target='_blank'>Twitter</Link>
              </li>
              <li className='pb-8'>
                <Link href={"https://www.pinterest.com/"} target='_blank'>Pinterest</Link>
              </li>
              <li className='pb-8'>
                <Link href={"https://www.youtube.com/"} target='_blank'>Youtube</Link>
              </li>
            </ul>
          </div>
        </div>


      </div >
      <Shopping />


    </>
  )
}


export default Blog
