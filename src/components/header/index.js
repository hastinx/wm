import React from 'react'

const Header = () => {
    let count = 0;
    return (
        <div className='w-100 bg-white d-flex justify-content-end align-items-center' style={{ height: '75px' }}>

            <span className='fw-bold fs-6 mx-5 bg-dark text-white text-center'>WARUNG MADURA</span>
            <marquee><i className="fa-solid fa-triangle-exclamation" /> Pastikan anda cukup kaya sebelum berbelanja disini, terima kasih</marquee>

            <button className='btn btn-sm btn-outline-dark rounded-pill h-50 mx-5' style={{ width: '75px' }}>
                <span className={`${count === 0 ? '' : 'me-3 '} fw-bold`}>{count === 0 ? "" : count}</span>
                <span><i className="fa-solid fa-cart-shopping"></i></span>
            </button>

        </div>
    )
}

export default Header