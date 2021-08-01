import React from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeScreen from './screens/HomeScreen/HomeScreen'

const App = () => {
     return (
          <>
               <Header />
               <main className='Appmain'>
                    <HomeScreen />
               </main>

               <Footer />
          </>
     )
}

export default App
