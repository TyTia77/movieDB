import React from "react"

require('./arrow-nav.scss')

export default class ArrowNav extends React.Component {

  handleClick(event){
    this.props.handleClick(event);
  }

  render() {

    let arrow = [{
      class: 'fa fa-chevron-left fa-3x', 
      direction: 'prev'
    },{
      class: 'fa fa-chevron-right fa-3x',
      direction: 'next'
    }];

    const mapArrow = arrow.map((arrow, index) => {
      return (
        <i 
          key={index} 
          class={arrow.class}
          data-next={arrow.direction} 
          onClick={this.handleClick.bind(this)}
          aria-hidden="true"></i>
      )
    });

    return (
      <div class="hero-nav-container">
        {mapArrow}
      </div>    
    );
  }
}