import React from 'react'
import { Modal } from 'react-bootstrap'

const ModalProduct = ({ show, handleClose, title, dataProduct }) => {
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
                            <span className='fs-6 fw-bold text-center'>{dataProduct.price}</span>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <div className='bg-white d-flex justify-content-between align-items-center w-100'>
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
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalProduct