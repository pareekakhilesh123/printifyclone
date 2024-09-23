import React from 'react'
import "./Section.css"
import Button from '../Button'

function Section() {
  return (
    <div className='Section'>
    <div className='Section-left'>
        <h2>Create and sell custom products</h2>

    <ul className='point'>
        <li> <img src='check-mark.svg' alt='Right-img'/> 100% Free to use</li>
        <li> <img src='check-mark.svg' alt='Right-img'/>900+ High-Quality Products</li>
        <li><img src='check-mark.svg' alt='Right-img'/>Largest global print network</li>
    </ul>

    <Button label="Start For Free" />
    <Button label="How it works?" />

    <p>Trusted by over 8M sellers around the world</p>
</div>

<div className='Section-right'>
<img src='Section-Right-img.svg' alt='Section-Right-img' />

</div>
    </div>
  )
}

export default Section