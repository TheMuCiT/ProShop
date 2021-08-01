import React from 'react'

import './product.css'

const Product = ({ product }) => {
     return (
          <div className='product'>
               <a href={`/product/${product._id}`}>
                    <div className='test'>
                         TESTTESTTESTTESTTESTTEST
                         {/* <img src={product.image} alt={product.name} className='productIMG' /> */}
                    </div>
               </a>
          </div>
     )
}

export default Product
