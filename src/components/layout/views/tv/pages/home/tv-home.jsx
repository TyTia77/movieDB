import React, { PropTypes } from "react"
import { getInfo } from "../../../../../../api"

require('./tv-home.scss')

// https://image.tmdb.org/t/p/w185_and_h278_bestv2/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg

const tvHome = ({ items }) =>
    <div class="tv-home-container">
        {
            items.map((item, index) => {
                let url = `${getInfo().images_url}/w185_and_h278_bestv2/${item.poster_path}`;

                return (
                    <div class="tv-home-card" key={index}>
                        <img class="tv-home-img" src={url} alt=""/>

                        <div className="tv-home-content">
                            <header class="tv-home-header">
                                <div className="tv-home-main-header">
                                    <label class="tv-home-main-title">{item.name}</label>
                                    <label class="tv-home-main-title">{item.vote_average}</label>
                                </div>
                                <div className="tv-home-sub-header">
                                    <label>{item.first_air_date}</label>
                                </div>
                            </header>
                            <main class="tv-home-main">
                                {item.overview}
                            </main>
                        </div>

                    </div>
                )
            })
        }
    </div>

tvHome.PropTypes = {
    items: PropTypes.object
}

export default tvHome