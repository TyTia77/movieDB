import React from "react"

require('./loading-screen.scss')

const Loader = () => 
    <div className="load-container">
        <div class="spinner">
            <div class="cube1"></div>
            <div class="cube2"></div>
        </div>
    </div>

export default Loader