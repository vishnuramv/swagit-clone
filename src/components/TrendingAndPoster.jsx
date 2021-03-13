import React from 'react'
import timg1 from '../assets/timg1.jpg'
import timg2 from '../assets/timg2.jpeg'
import timg3 from '../assets/timg3.jpg'
import timg4 from '../assets/timg4.jpg'
import poster from '../assets/poster.svg'

import '../styles/TrendingAndPoster.css'
const TrendingAndPoster = () => {
    return (
        <div className="trendingAndPoster">
            <div className="trendingAndPoster__trending">
                <h6>Trending</h6>
                <div className="trendingAndPoster__trendingPosts">
                    <a href="https://www.swagit.in/shop-the-looks/hina-khan" className="trendingAndPoster__trendingPost">
                        <img src={timg1} alt="Hina Khan" />
                        <span>Hina Khan</span>
                    </a>
                    <a href="https://www.swagit.in/shop-the-looks/rubina-dilaik" className="trendingAndPoster__trendingPost">
                        <img src={timg2} alt="Rubina Diliak" />
                        <span>Rubina Diliak</span>
                    </a>
                    <a href="https://www.swagit.in/shop-the-looks/hina-khan-4" className="trendingAndPoster__trendingPost">
                        <img src={timg3} alt="Hina Khan" />
                        <span>Hina Khan</span>
                    </a>
                    <a href="https://www.swagit.in/shop-the-looks/shehnaz-gill-3" className="trendingAndPoster__trendingPost">
                        <img src={timg4} alt="Shehnaz Gill" />
                        <span>Shehnaz Gill</span>
                    </a>
                </div>
            </div>
            <a href="https://www.swagit.in/your-lookbook" className="trendingAndPoster__poster">
                <img src={poster} alt="Shehnaz Gill" />
            </a>
        </div>
    )
}

export default TrendingAndPoster
