import React from "react"

require('./logo.scss')

const Logo = () =>
  <div>
    <div class="logo-container">
      <span class="logo">TyDb</span>
    </div>
    <aside class="logo-text">
      <span> TMDB </span>
      <span> Ty Movie Database</span>
    </aside>
  </div>

export default Logo