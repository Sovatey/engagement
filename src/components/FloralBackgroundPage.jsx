import React from 'react'
import leftImage from '../assets/both.jpg'
import rightImage from '../assets/tey.jpg'
import './FloralBackgroundPage.css'

export default function FloralBackgroundPage() {
  return (
    <section className="floral-page">
      <div className="row">
        <img src={leftImage} alt="left floral" className="flower left" />
        <img src={rightImage} alt="right floral" className="flower right" />
      </div>
      
    </section>
  )
}
