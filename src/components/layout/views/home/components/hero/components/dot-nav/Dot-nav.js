import React from "react"

require('./dot-nav.scss')

export default class DotNav extends React.Component {

  handleClick(event){
    this.props.handleClick(
      parseInt(
        event.target.getAttribute('data-index')
      )
    );
  }

  render() {
    const mapHeroDotNav = this.props.position.map((pos, index) => {
      let className = pos ? 'fa fa-circle' : 'fa fa-circle-o';

      return (
        <i 
          key={index} 
          class={className} 
          onClick={this.handleClick.bind(this)}
          data-index={index}
          aria-hidden="true"></i>
      )
    });

    return (
      <div class="dot-nav-container">
        {mapHeroDotNav}
      </div>
    );
  }
}