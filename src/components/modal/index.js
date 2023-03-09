import React from 'react'
import { Modal } from 'react-bootstrap'
import { formatRupiah } from '../../utils/format'

const ModalProduct = ({ show, handleClose, dataProduct, addToCart }) => {

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{dataProduct.brand}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='card-body d-flex gap-5 align-items-center flex-column'>
                        <img src={dataProduct.img_src} alt='' style={{ width: '200px', height: '200px' }} />
                        <div className='d-flex flex-column'>
                            <span className='fs-6 fw-bold text-center'>{dataProduct.brand}</span>
                            <span className='fs-6 fw-light text-center text-wrap'>{dataProduct.type}</span>
                            <span className='fs-6 fw-bold text-center'>{formatRupiah(dataProduct.price, 'IDR ')}</span>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <div className='bg-white d-flex justify-content-between align-items-center w-100'>
                        {/* <div className='d-flex align-items-center gap-3 p-2 rounded border'>
                            <button className='btn btn-sm btn-success fw-bold' onClick={increment}>+</button>
                            <span>{countItems === undefined ? 1 : countItems}</span>
                            <button className='btn btn-sm btn-light fw-bold' onClick={decrement}>-</button>
                        </div> */}
                        <div className='d-flex align-items-center gap-3 bg-light p-2 rounded'>
                            <button className='btn btn-sm btn-light' onClick={addToCart}><i className="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalProduct