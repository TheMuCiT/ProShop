import React from 'react'
import products from '../../products'

import Product from '../../components/Product/Product'

import './homescreen.css'

const HomeScreen = () => {
     return (
          <>
               <h1>LATEST PRODUCTS</h1>
               <div className='homeScreenProductList'>
                    <div className='homeScreenProductWrapper'>
                         {products.map((product) => (
                              <Product key={product._id} product={product} />
                         ))}
                    </div>
               </div>
          </>
     )
}

export default HomeScreen
