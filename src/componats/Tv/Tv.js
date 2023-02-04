import React from 'react';
import TV from '../../assets/tv.png'
import VIDEO from '../../assets/video.mp4'
function Tv() {
  return (
    <section class = "bg-dark text-light story-section">
    <div class = "container">
        <div class = "story-card story-card-1">
            <div class = "story-card-text">
                <h2 class = "heading-lg">Enjoy on your TV.</h2>
                <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blue-ray players, and more.</h3>
            </div>
            <div class = "story-card-img">
                <img src ={TV}/>
                <video autoPlay muted loopp>
                    <source src ={VIDEO} type = "video/mp4"/>
                </video>
            </div>
        </div>
    </div>
</section>
  )
}

export default Tv