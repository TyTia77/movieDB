import React from "react"
import { IndexLink, Link } from "react-router"

require('./nav.scss')

const Nav = () =>
  <div>
    <ul class="nav-items-container">
      <li class="nav-items-links"><IndexLink to="/">home</IndexLink></li>
      <li class="nav-items-links"><IndexLink to="/actor">actor</IndexLink></li>
      <li class="nav-items-links"><IndexLink to="/movie">movie</IndexLink></li>
      <li class="nav-items-links"><IndexLink to="/tv">tv</IndexLink></li>
    </ul>
  </div>

export default Nav