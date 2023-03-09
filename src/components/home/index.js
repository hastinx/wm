import React from 'react'
import Header from '../header'
import Product from '../product'
import ShowProduct from '../product/showProduct'


const Home = () => {


    return (
        <div>
            <Header />
            <Product />
            {/* <ShowProduct /> */}
        </div>
    )
}

export default Home

// FORM
// Product Name
// Price
// Image URL
// SUBMIT -> tambahkan produk kedalam products.json

// products.json -> daftar data product(bikin dummy sample data)

// data yang ditampilkan di table products baca dari products.

// data product yang di add kedalam cart disimpan di redux

// endpoints:
// endpoint /products -> menampilkan daftar product di dalam products.json
// endpoint /cart -> menampilkan daftar cart yang ada di dalam redux (ada button delete, + qty, - qty)