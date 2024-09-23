import React from 'react'
import Swiper from './component/Swiper/Swiper'
import './Swiperes.css'
function Swiperes() {
  return (
    <div className="swiperes">
    <Swiper
      image={"custom-products.png"}
      title="Create"
      description_title="custom product"
      description="We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
    />
    <Swiper
      image={"your-products.png "}
      title="Sell"
      description_title="on your terms"
      description="Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
    />
    <Swiper
      image={"fullfillment.png"}
      title="WE HANDLE"
      description_title="fulfillment"
      description="With 900+ products and top-quality brands, you can choose the best products for your business."
    />
  </div>
  )
}

export default Swiperes