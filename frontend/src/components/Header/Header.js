import React from 'react'

import './header.css'

const Header = () => {
     return (
          <header>
               <div className='header'>
                    <div className='headerLeft'>
                         <div className='headerTitle'>PROSHOP</div>
                    </div>
                    <div className='headerRight'>
                         <div className='headerLinks'>
                              <div className='headerLink'>
                                   <i className='fas fa-shopping-cart'></i>
                                   <a href='/' className='headerLinkText'>
                                        CART
                                   </a>
                              </div>
                              <div className='headerLink'>
                                   <i className='fas fa-user'></i>
                                   <a href='/' className='headerLinkText'>
                                        {' '}
                                        SIGN IN
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     )
}

export default Header
