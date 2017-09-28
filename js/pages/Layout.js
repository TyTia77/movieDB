import React from "react"
import $ from "jquery"

import Body from "../components/Body"
import Footer from "../components/Footer"
import Header from "../components/Header"

require('../../styles/index.scss')

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentWillMount(){
  }

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
