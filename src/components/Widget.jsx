import React from 'react'
import "../style/widget.css";
const Widget = () => {
  return (
    <div className="widget">
      <div className="top-widget">
        <h3>Linkedin News</h3>
        <span><i class="fa-solid fa-circle-info"></i></span>
      </div>
      <div className="widget-news">
        <div className="link-news">
        <span className='circle'></span>
       <p>More brands headline live events.</p>
       </div>
       <div className="link-news">
       <span className='circle'></span>
       <p>Hospatality has an occupancy issue.</p>
       </div>
       <div className="link-news">
       <span className='circle'></span>
       <p>Revenge shopping spree ends.</p>
       </div>
       <div className="link-news">
       <span className='circle'></span>
       <p>Quick commerce races ahead.</p>
       </div>
       <div className="link-news">
       <span className='circle'></span>
       <p>B2B fintech set to soar.</p>
       </div>
      </div>
    </div>
  )
}

export default Widget