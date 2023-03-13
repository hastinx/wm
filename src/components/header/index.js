import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [p_counter, setCounter] = useState(0);
  const { counter } = useSelector((state) => state.product);
  const { userLogin } = useSelector((state) => state.users);
  console.log('userLogin    ', userLogin);
  const users = JSON.parse(localStorage.getItem('users'));
  console.log(users);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (users === null) {
      navigate('/wm/login');
    }

    setCounter(counter);
  }, [counter]);

  return (
    <div
      className="w-100 bg-white d-flex justify-content-between align-items-center"
      style={{ height: '75px' }}
    >
      <span className="fw-bold fs-6 mx-5 bg-dark text-white text-center p-3">
        WARUNG MADURA
      </span>
      <button
        className="btn btn-sm border-0 h-50 "
        disabled
        style={{ width: '200px' }}
      >
        {' '}
        <span>
          <i className="fa-solid fa-user me-3"></i>
        </span>
        <span className={`fw-bold`}>
          {users !== null ? users[0].username : ''}
        </span>
      </button>
      {location.pathname === '/wm/cart' ? (
        <div>
          <button
            className="btn btn-sm border-0 h-50 "
            disabled
            style={{ width: '75px' }}
          >
            <span className={`${p_counter === 0 ? '' : 'me-3 '} fw-bold`}>
              {p_counter === 0 ? '' : p_counter}
            </span>
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </button>
          <Link to="/wm">
            <button
              className="btn btn-sm btn-outline-dark rounded-pill h-50 me-5"
              style={{ width: '75px' }}
            >
              <span className="fw-bold">Back</span>
            </button>
          </Link>
        </div>
      ) : location.pathname === '/wm/add' ? (
        <div>
          <Link to="/wm">
            <button
              className="btn btn-sm btn-outline-dark rounded-pill h-50 me-3"
              style={{ width: '75px' }}
            >
              <span className="fw-bold">Back</span>
            </button>
          </Link>
          <Link to="/wm/add">
            <button
              className="btn btn-sm btn-dark rounded-pill h-50 me-5"
              style={{ width: '75px' }}
            >
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
              <span className="fw-bold">Add</span>
            </button>
          </Link>
          <Link>
            <button
              className="btn btn-sm btn-dark rounded-pill h-50 me-5"
              style={{ width: '75px' }}
              onClick={() => {
                localStorage.removeItem('users');
                navigate('/wm/login');
              }}
            >
              <span className="fw-bold">Logout</span>
            </button>
          </Link>
        </div>
      ) : location.pathname === '/wm/userpage' ? (
        <div>
          <Link to="/wm/menu">
            <button
              className="btn btn-sm btn-outline-dark rounded-pill h-50 me-3"
              style={{ width: '75px' }}
            >
              <span className="fw-bold">Back</span>
            </button>
          </Link>
          <Link to="/wm/login">
            <button
              className="btn btn-sm btn-dark rounded-pill h-50 me-5"
              style={{ width: '75px' }}
              onClick={() => {
                localStorage.removeItem('users');
                navigate('/wm/login');
              }}
            >
              <span className="fw-bold">Logout</span>
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/wm/cart">
            <button
              className="btn btn-sm btn-outline-dark rounded-pill h-50 me-3"
              style={{ width: '75px' }}
            >
              <span className={`${p_counter === 0 ? '' : 'me-3 '} fw-bold`}>
                {p_counter === 0 ? '' : p_counter}
              </span>
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </button>
          </Link>
          <Link to="/wm/add">
            <button
              className="btn btn-sm btn-dark rounded-pill h-50 me-5"
              style={{ width: '75px' }}
            >
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
              <span className="fw-bold">Add</span>
            </button>
          </Link>
          <Link to="/wm/login">
            <button
              className="btn btn-sm btn-dark rounded-pill h-50 me-5"
              style={{ width: '75px' }}
              onClick={() => {
                localStorage.removeItem('users');
                navigate('/wm/login');
              }}
            >
              <span className="fw-bold">Logout</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
