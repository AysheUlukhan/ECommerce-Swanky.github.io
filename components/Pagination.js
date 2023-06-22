import React, { useState } from 'react'
import { product } from '../pages/product';

const Pagination = () => {
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
  return (
    <nav aria-label="Page navigation example">
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
  )
}

export default Pagination