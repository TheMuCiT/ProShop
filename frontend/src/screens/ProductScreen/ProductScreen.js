import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Rating from '../../components/Product/Rating'

import './productScreen.css'

const ProductScreen = ({ match }) => {
     const [product, setProduct] = useState({})

     useEffect(() => {
          const fetchProduct = async () => {
               const { data } = await axios.get(`/api/products/${match.params.id}`)

               setProduct(data)
          }

          fetchProduct()
     }, [match])

     return (
          <div className='productScreen'>
               <Link to='/' className='productScreenButton'>
                    <div className='productScreenGoBackText'>Go Back</div>
               </Link>
               <div className='productScreenItem'>
                    <div className='productScreenIMG'>
                         <img src={product.image} alt='' />
                    </div>
                    <div className='productScreenAbout'>
                         <div className='productScreenAboutTitle'>{product.name}</div>
                         <div className='productScreenAboutRating'>
                              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                         </div>
                         <div className='productScreenAboutRatingPrice'>Price: ${product.price}</div>
                         <div className='productScreenAboutRatingDescription'>{product.description}</div>
                    </div>
                    <div className='productScreenCard'>
                         <div className='productScreenCardPrice'>
                              Price: <div className='productScreenCardPriceValue'>{product.price}</div>
                         </div>
                         <div className='productScreenCardStatus'>
                              Status:
                              <div className='productScreenCardStatusValue'>
                                   {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                              </div>
                         </div>
                         <div className='productScreenCardButton'>
                              <button
                                   className='productScreenCardButtonAction'
                                   disabled={product.countInStock === 0}
                              >
                                   ADD TO CARD
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default ProductScreen
