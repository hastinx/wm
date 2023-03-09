import React, { useEffect, useState } from 'react';
import { list } from './productList';
import { useLocation } from 'react-router-dom';
import ModalProduct from '../modal';
import { useDispatch } from 'react-redux/es/exports';
import { update } from '../../features/productSlice';
import { formatRupiah } from '../../utils/format';
import axios from 'axios';

const Product = () => {
  const location = useLocation();
  const [count, setCount] = useState(1);
  const [dataProduct, setDataProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const updateCart = (param) => {
    console.log(param);
    let cart = {
      id: param.id,
      brand: param.brand,
      img_src: param.img_src,
      price: param.price,
    };
    let method = 'ADD';

    dispatch(update({ cart, method }));
    handleClose();
  };

  const handleClick = (param) => {
    setDataProduct({
      id: param.id,
      img_src: param.img_src,
      brand: param.brand,
      type: param.type,
      price: param.price,
    });
    handleShow();
  };

  const getList = async () => {
    try {
      let data = await axios.get('http://localhost:9000/products');
      setProducts(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="container-fluid bg-dark d-flex gap-5 justify-content-center flex-wrap vh-100">
      {products.length > 0
        ? products.map((product) => (
            <div
              className="card w-25 h-50 mt-5 product"
              key={product.id}
              onClick={() => handleClick(product)}
            >
              <div className="card-body d-flex gap-5 align-items-center flex-column">
                <img
                  src={product.img_src}
                  alt=""
                  style={{ width: '200px', height: '200px' }}
                />
                <div className="d-flex flex-column">
                  <span className="fs-6 fw-bold text-center">
                    {product.brand}
                  </span>
                  <span className="fs-6 fw-light text-center text-wrap">
                    {product.type}
                  </span>
                  <span className="fs-6 fw-bold text-center">
                    {formatRupiah(product.price, 'IDR ')}
                  </span>
                </div>
              </div>
            </div>
          ))
        : list.map((product) => (
            <div
              className="card w-25 h-50 mt-5 product"
              key={product.id}
              onClick={() => handleClick(product)}
            >
              <div className="card-body d-flex gap-5 align-items-center flex-column">
                <img
                  src={product.img_src}
                  alt=""
                  style={{ width: '200px', height: '200px' }}
                />
                <div className="d-flex flex-column">
                  <span className="fs-6 fw-bold text-center">
                    {product.brand}
                  </span>
                  <span className="fs-6 fw-light text-center text-wrap">
                    {product.type}
                  </span>
                  <span className="fs-6 fw-bold text-center">
                    {formatRupiah(product.price, 'IDR ')}
                  </span>
                </div>
              </div>
            </div>
          ))}

      <ModalProduct
        show={show}
        handleClose={() => handleClose()}
        addToCart={() => updateCart(dataProduct)}
      />
    </div>
  );
};

export default Product;
