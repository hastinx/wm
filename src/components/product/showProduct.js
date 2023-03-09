import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../header';
import { useDispatch } from 'react-redux/es/exports';
import { update } from '../../features/productSlice';
import { formatRupiah } from '../../utils/format';

const ShowProduct = () => {
  const [p_cart, setChart] = useState([]);
  const [count, setCount] = useState(1);
  const { cart } = useSelector((state) => state.product);
  console.log(cart);
  const dispatch = useDispatch();

  const deleteCart = (param) => {
    // console.log(param);
    let cart = {
      id: param.id,
      brand: param.brand,
      img_src: param.img_src,
      price: param.price,
    };
    let method = 'DELETE';
    dispatch(update({ cart, method }));
  };

  const incrementItems = (param) => {
    setCount(count + 1);

    let cart = {
      id: param.id,
      brand: param.brand,
      img_src: param.img_src,
      price: param.price,
      totalPrice: 0,
      qty: count,
    };

    let method = 'INCREMENT';
    dispatch(update({ cart, method }));
  };

  const decrementItems = (param) => {
    count === 1 ? setCount(1) : setCount(count - 1);
    let totalPrice = param.price * count;
    console.log(param);
    let cart = {
      id: param.id,
      brand: param.brand,
      img_src: param.img_src,
      price: param.price,
      totalPrice: 0,
      qty: count,
    };
    let method = 'DECREMENT';
    dispatch(update({ cart, method }));
  };

  useEffect(() => {
    setChart(cart);
  }, [cart]);
  return (
    <div>
      <Header />
      {p_cart.length === 0
        ? 'Anda belum memilih product'
        : p_cart.map((wishlist) => (
            <div className="card" key={wishlist.id}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3 align-items-center">
                  <img
                    src={wishlist.img_src}
                    alt=""
                    style={{ width: '62px', height: '62px' }}
                  />

                  <div className="d-flex flex-column">
                    <span className="fs-6 fw-normal">{wishlist.brand}</span>
                    <span className="fs-6 fw-light">
                      {formatRupiah(wishlist.price, 'IDR ')}
                    </span>
                  </div>
                </div>
                <span className="fs-6 fw-light">
                  {formatRupiah(
                    wishlist.totalPrice === undefined
                      ? wishlist.price
                      : wishlist.totalPrice,
                    'IDR '
                  )}
                </span>
                <div className="d-flex gap-3 align-items-center">
                  <button
                    className="btn btn-sm btn-danger"
                    style={{ width: '32px', height: '32px' }}
                    onClick={() => deleteCart(wishlist)}
                  >
                    <i className="fa-solid fa-trash" />
                  </button>
                  <div className="d-flex align-items-center gap-3 p-2 rounded border">
                    <button
                      className="btn btn-sm btn-success fw-bold"
                      onClick={() => incrementItems(wishlist)}
                    >
                      +
                    </button>
                    <span>{wishlist.qty === undefined ? 1 : wishlist.qty}</span>
                    <button
                      className="btn btn-sm btn-light fw-bold"
                      onClick={() => decrementItems(wishlist)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default ShowProduct;
