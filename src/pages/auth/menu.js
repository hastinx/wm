import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="container vh-100 vw-100 d-flex justify-content-center align-items-center gap-3">
      <Link to="/wm/userpage">
        <div className="card">
          <div className="card-body">
            <i className="fa-solid fa-user" /> User Page
          </div>
        </div>
      </Link>
      <Link to="/wm">
        <div className="card">
          <div className="card-body">
            <i className="fa-solid fa-cart-shopping" /> Shopping
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
