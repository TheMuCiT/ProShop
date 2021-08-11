import React from 'react'

import { Link } from 'react-router-dom'

import Rating from './Rating'

import './product.css'

const Product = ({ product }) => {
     return (
          <div className='product'>
               <Link to={`/product/${product._id}`} className='productCard'>
                    <div className='productIMG'>
                         <img src={product.image} alt={product.name} className='productIMG' />
                    </div>
                    <div className='productText'>
                         <div className='productName'>{product.name}</div>
                         <div className='productReviews'>
                              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                         </div>
                         <div className='productPrice'>${product.price}</div>
                    </div>
               </Link>
          </div>
     )
}

export default Product
