import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import close from '../assets/icons/close.png'
import { product } from './product'


const Cart = () => {
    const [counts, setCounts] = useState(product.map(() => 1));
    const [list, setList] = useState(product);
    const [deleteId, setDeleteId] = useState("")
    const [showModal, setShowModal] = useState(false);


    const handleClickDelete = (id) => {
        setDeleteId(id)
        setShowModal(true)
    }

    const handleDeleteItem = () =>{
        setList(pre => {
            const newArray = [...pre]
            return newArray.filter(item => item.id !== deleteId) 
        })
        setShowModal(false)
    }


    const handleDecrease = (index) => {
        if (counts[index] > 1) {
            const newCounts = [...counts];
            newCounts[index] = newCounts[index] - 1;
            setCounts(newCounts);
        }
    };

    const handleIncrease = (index) => {
        const newCounts = [...counts];
        newCounts[index] = newCounts[index] + 1;
        setCounts(newCounts);
    };

    // function removeItem (id) {
    //     const newItem = list.filter((r)=>r.id !==id);
    //     setList(newItem);
    //     console.log(list)
       
    // }



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
                <div className="flex justify-center px-80 py-50 rounded-t">
                  <h3 className="text-32 font-semibold text-granite-gray">
                    Are you sure?
                  </h3>
                 
                </div>
                {/*body*/}
                
                {/*footer*/}
                <div className="flex justify-around items-center p-6 ">
                  <button
                    className="text-white bg-granny font-bold uppercase px-50 py-10 rounded"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-venetian-red text-white font-bold uppercase  px-50 py-10 rounded "
                    type="button"
                    onClick={handleDeleteItem}
                    // onClick={()=>removeItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

            <div className='text-center bg-white-chocolate py-50'>
                <h2 className='text-52 xs:text-32 sm:text-32 xxs:text-32 font-semibold'>Cart</h2>
                <p className='flex justify-center items-center font-medium'>Home <Image src='/ic_baseline-keyboard-arrow-right.svg' width={20} height={10} /> <span>Cart</span></p>
            </div>
            <div className='bg-cultured lg:px-105 xl:px-105 2xl:px-105 sm:px-80 xs:px-80 xxs:px-80 pt-150 sm:pt-80 xs:pt-80 xxs:pt-80'>
                <div className="flex flex-col">
                    <div className=" sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b border-b-timberwolf font-medium dark:border-neutral-500 visible sm:hidden xs:hidden xxs:hidden">
                                        <tr>
                                            <th scope="col" className="pl-60 py-4">Product</th>
                                            <th scope="col" className="px-6 py-4">Quantity</th>
                                            <th scope="col" className="px-6 py-4">Subtotal</th>
                                            <th scope="col" className="px-6 py-4"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.map((item, index) => (
                                            
                                            <tr className="border-b border-b-timberwolf" key={index}>
                                                <td className="whitespace-nowrap py-20">
                                                    <div className='flex items-center'>
                                                        <Image src={item.image} width={100} height={50} />
                                                        <div className="font-semibold pl-9">
                                                            <h6 className="text-16 leading-4 text-black mb-3">
                                                                {item.title}
                                                            </h6>
                                                            <div className="flex items-center">
                                                                <span className="text-13 leading-4 text-venetian-red">
                                                                    {item.price}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 sm:pt-105 xs:pt-105 xxs:pt-105 ">
                                                    <div className='flex'>
                                                        <button
                                                            className='bg-isabelline px-13'
                                                            onClick={() => handleDecrease(index)}
                                                            disabled={counts[index] === 1}
                                                        >
                                                            -
                                                        </button>
                                                        <div className='bg-white px-13 border border-black'>
                                                            {counts[index]}
                                                        </div>
                                                        <button
                                                            className='bg-white-coffee px-13'
                                                            onClick={() => handleIncrease(index)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-venetian-red font-semibold text-20 visible sm:hidden xs:hidden xxs:hidden">
                                                    {item.price}
                                                </td>
                                                <td className=" px-6 py-4">
                                                    <Image alt='/' src={close} onClick={()=>handleClickDelete(item.id)}  className='cursor-pointer 2xl:w-10 xl:w-10 lg:w-10 md:w-10 sm:w-5 xs:w-5 xxs:w-5' />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-40'>
                    <div className='border-b border-b-timberwolf py-30'>
                        <h2 className='text-42 font-semibold'>Cart Totals</h2>
                    </div>
                    <div>
                        <div className='flex gap-x-32 py-10 border-b border-b-timberwolf'>
                            <h2 className='text-18 font-medium'>Subtotal</h2>
                            <p className='font-medium text-venetian-red'>$26.00</p>
                        </div>
                        <div className='flex gap-x-36 py-10 border-b border-b-timberwolf'>
                            <h2 className='text-18 font-medium'>Total</h2>
                            <p className='font-medium text-venetian-red'>$26.00</p>
                        </div>
                    </div>

                    <div className='pt-30 flex sm:flex-col items-start xs:flex-col  xxs:flex-col'>
                        <a className='py-10 px-50 bg-rich-black text-white sm:text-11 xs:text-11 xxs:text-11 cursor-pointer'>UPDATE CART</a>
                        <a className='py-10 px-50 bg-rich-black text-white uppercase 2xl:mx-20 xl:mx-20 lg:mx-20 md:mx-20 sm:my-20 xs:my-20 xxs:my-20 sm:text-11 xs:text-11 xxs:text-11 cursor-pointer'>Continue shopping</a>
                        <a href='/checkout' className='py-10 px-50 bg-rich-black text-white uppercase sm:text-11 xs:text-11 xxs:text-11 cursor-pointer'>proceed to checkout</a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Cart