import React, { PropTypes } from "react"

require('./arrow-nav.scss')

const ArrowNav = ({handleClick}) => {

  let arrow = [{
    class: 'fa fa-chevron-left fa-3x', 
    direction: 'prev'
  },{
    class: 'fa fa-chevron-right fa-3x',
    direction: 'next'
  }];

  return (
    <div class="hero-nav-container">
      {
        arrow.map((arrow, index) => 
          <i
            key={index}
            class={arrow.class}
            data-next={arrow.direction}
            onClick={handleClick}
            aria-hidden="true"></i>
        )
      }
    </div>    
  );
}

ArrowNav.PropTypes = {
  handleClick: PropTypes.func
}

export default ArrowNav