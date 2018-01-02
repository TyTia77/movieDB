import React, { PropTypes } from "react"

require('./dot-nav.scss')

const DotNav = ({position, handleClick}) =>
  <div class="dot-nav-container">
    {
      position.map((pos, index) => {
        let className = pos ? 'fa fa-circle' : 'fa fa-circle-o';

        return (
          <i
            key={index}
            class={className}
            onClick={handleClick}
            data-index={index}
            aria-hidden="true"></i>
        )
      })
    }
  </div>

DotNav.PropTypes = {
  handleClick: PropTypes.func,
  position: PropTypes.number
}

export default DotNav