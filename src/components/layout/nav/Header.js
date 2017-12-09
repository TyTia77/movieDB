import React from "react";

import Nav from "./components/Nav";
import Logo from "./components/Logo";

require('./Header.scss');

export default class Header extends React.Component {

  constructor() {
  super();
    this.state = {
      searchOpened: false,
    };
  }


    // Initialize / Construction
    // getDefaultProps() (React.createClass) or MyComponent.defaultProps (ES6 class)
    // getInitialState() (React.createClass) or this.state = ... (ES6 constructor)
    // componentWillMount()
    // render()
    // Children initialization & life cycle kickoff
    // componentDidMount()

    // componentsWillMount() runs before render


    // runs after render
    componentDidMount() {
    
    // document.getElementsByClassName('search-container')[0].setAttribute('open', this.state.searchOpened);
      this.handleOpenAttr();
    }


    handleOpenAttr(){
      var element = document.getElementsByClassName('search-container')[0];

      if (this.state.searchOpened){
        element.setAttribute('open', '');
      } else {
        element.removeAttribute('open');
      }
    }

  handleClick(e){
    this.state.searchOpened = !this.state.searchOpened;
    this.handleOpenAttr();
  }

  render() {
    return (
      <div>
        <header className="navbar">
          <div className="nav-logo-container"> 
            <Logo />            
          </div>
          <nav className="nav-container"> 
              <Nav />
           </nav>
          <div className="search-container" >
              <input type="text" placeholder="" onClick={this.handleClick.bind(this)} />
          </div>
        </header>
      </div>
    );
  }
}