import React, { PropTypes } from "react"

require('./loading-screen.scss')

const Loader = () =>
    <div className="load-container">
        <div class="spinner">
            <div class="cube1"></div>
            <div class="cube2"></div>
        </div>
    </div>

Loader.PropTypes = {
}

export default Loader