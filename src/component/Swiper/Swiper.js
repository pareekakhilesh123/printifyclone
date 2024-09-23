import React from 'react'
import './Swiper.css'

function Swiper({ image, title, description_title ,description}) {
  return (
    <div className="swiper-card">
    <img src={image} alt={title} className="swiper-image" />
    <h6>{title}</h6>
    <h3>{description_title}</h3>
    <p>{description}</p>
  </div>
  )
}

export default Swiper