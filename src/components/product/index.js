import React, { useState } from 'react'
import { list } from './productList'
import { useLocation } from 'react-router-dom'
import ModalProduct from '../modal'
import { useDispatch } from 'react-redux/es/exports'
import { update } from '../../features/productSlice'


const Product = () => {
    const location = useLocation()
    const [dataProduct, setDataProduct] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const updateCart = (param) => {
        console.log(param)
        let cart = {
            id: param.id,
            brand: param.brand,
            img_src: param.img_src,
            price: param.price,
        }
        let method = 'ADD';

        dispatch(update({ cart, method }))
        handleClose()
    }

    const handleClick = (param) => {
        setDataProduct({
            'id': param.id,
            'img_src': param.img_src,
            'brand': param.brand,
            'type': param.type,
            'price': param.price
        })
        handleShow()
    }
    return (
        <div className='container-fluid bg-dark d-flex gap-5 justify-content-center flex-wrap vh-100' >
            {list.map(product =>

                <div className='card w-25 h-50 mt-5 product' key={product.id} onClick={() => handleClick(product)}>
                    <div className='card-body d-flex gap-5 align-items-center flex-column'>
                        <img src={product.img_src} alt='' style={{ width: '200px', height: '200px' }} />
                        <div className='d-flex flex-column'>
                            <span className='fs-6 fw-bold text-center'>{product.brand}</span>
                            <span className='fs-6 fw-light text-center text-wrap'>{product.type}</span>
                            <span className='fs-6 fw-bold text-center'>{product.price}</span>
                        </div>

                    </div>
                    {location.pathname === '/' ? "" :
                        <div className='card-footer bg-white d-flex justify-content-between align-items-center'>

                            <div className='d-flex align-items-center gap-3 p-2 rounded border'>
                                <button className='btn btn-sm btn-success fw-bold'>+</button>
                                <span>0</span>
                                <button className='btn btn-sm btn-light fw-bold'>-</button>
                            </div>
                            <div className='d-flex align-items-center gap-3 bg-light p-2 rounded'>
                                <button className='btn btn-sm btn-light'><i className="fa-solid fa-cart-shopping"></i></button>
                                |
                                <button className='btn btn-sm btn-danger'><i className='fa-solid fa-trash' /></button>
                            </div>


                        </div>
                    }

                </div>

            )}

            <ModalProduct show={show} handleClose={() => handleClose()} dataProduct={dataProduct} addToCart={() => updateCart(dataProduct)} />
        </div>
    )
}

export default Product