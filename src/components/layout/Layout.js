import React, { PropTypes } from "react"

import Footer from "./footer/Footer"
import Header from "./nav/Header"

require('../../styles/index.scss')
require('./layout.scss')

const Layout = ({children}) => 
  <div>
    <Header/>
    <main>
      {children}
      <Footer/>
    </main>
  </div>

Layout.propTypes = {
  children: PropTypes.object
}

export default Layout