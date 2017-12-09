import React from "react"
import $ from "jquery"

// import Body from "../components/Body"
import Footer from "./footer/Footer"
import Header from "./nav/Header"

require('../../styles/index.scss')
require('./layout.scss')

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <main>
          {this.props.children}
          <Footer/>
        </main>
      </div>
    );
  }
}
