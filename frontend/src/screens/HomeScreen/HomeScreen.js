import React from 'react'
import products from '../../products'

import Product from '../../components/Product/Product'

import './homescreen.css'

const HomeScreen = () => {
     return (
          <>
               <h1>LATEST PRODUCTS</h1>
               <div className='homeScreenProductList'>
                    {products.map((product) => (
                         <Product product={product} />
                    ))}
               </div>
          </>
     )
}

export default HomeScreen
