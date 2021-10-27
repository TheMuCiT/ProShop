import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Product from '../../components/Product/Product'
import { listProducts } from '../../actions/productAction'

import './homescreen.css'

const HomeScreen = () => {
     const dispatch = useDispatch()

     const productList = useSelector((state) => state.productList)
     const { loading, error, products } = productList

     useEffect(() => {
          dispatch(listProducts())
     }, [dispatch])

     return (
          <>
               <h1>LATEST PRODUCTS</h1>
               {loading ? (
                    <h2>Loading....</h2>
               ) : error ? (
                    <h3>{error}</h3>
               ) : (
                    <div className='homeScreenProductList'>
                         <div className='homeScreenProductWrapper'>
                              {products.map((product) => (
                                   <Product key={product._id} product={product} />
                              ))}
                         </div>
                    </div>
               )}
          </>
     )
}

export default HomeScreen
