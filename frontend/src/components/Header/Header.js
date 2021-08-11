import React from 'react'

import { NavLink, Link } from 'react-router-dom'

import './header.css'

const Header = () => {
     return (
          <header>
               <div className='header'>
                    <div className='headerLeft'>
                         <Link to='/' className='headerTitle'>
                              PROSHOP
                         </Link>
                    </div>
                    <div className='headerRight'>
                         <div className='headerLinks'>
                              <NavLink activeClassName='headerActive' to='/card' className='headerLink'>
                                   <div className='headerIcon'>
                                        <i className='fas fa-shopping-cart'></i>
                                   </div>
                                   CART
                              </NavLink>
                              <NavLink activeClassName='headerActive' to='/login' className='headerLink'>
                                   <div className='headerIcon'>
                                        <i className='fas fa-user'></i>
                                   </div>
                                   <div className='headerText'>SIGN IN</div>
                              </NavLink>
                         </div>
                    </div>
               </div>
          </header>
     )
}

export default Header
