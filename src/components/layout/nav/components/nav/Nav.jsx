import React from "react"
import { IndexLink, Link } from "react-router"

require('./nav.scss')

const Nav = () =>
  <div>
    <ul>
      <li><IndexLink to="/">home</IndexLink></li>
      <li><IndexLink to="/actor">actor</IndexLink></li>
      <li><IndexLink to="/movie">movie</IndexLink></li>
      <li><IndexLink to="/tv">tv</IndexLink></li>
    </ul>
  </div>

export default Nav