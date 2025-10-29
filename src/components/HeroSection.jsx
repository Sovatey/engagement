import React, { useEffect } from 'react'
import couple from '../assets/couple.gif'
import bg from '../assets/floral-bg-minimal.png'
import './HeroSection.css'
import text from '../assets/text.png'
import heart from '../assets/heart.gif'

export default function HeroSection() {
  // Mobile viewport height fix
  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const hearts = Array.from({ length: 25 }).map((_, i) => {
    const left = Math.random() * 100
    const size = 10 + Math.random() * 20
    const duration = 5 + Math.random() * 5
    const delay = Math.random() * 5
    return { id: i, left, size, duration, delay }
  })

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#E8F6FF',
        width: '100%',
        height: 'calc(var(--vh, 1vh) * 100)',
      }}
    >
      {/* Falling Hearts (CSS animated only) */}
     <div className="falling-hearts">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            💛
          </div>
        ))}
      </div>


      <div className="hero-inner">
        <h1 className="title">ពិធីចូលចែចូវ</h1>

        <div className="logo-container">
          <img src={text} alt="Couple Logo" className="couple-logo" />
        </div>

        <h1 className="couple-names">
          ព្រី ណុច <img src={heart} alt="heart" style={{ width: "30px", verticalAlign: "middle" }}/> ហែន សុវត្តី
        </h1>

        <div className="guest-box">
          <span className="guest-name">ឡៅ លាងហ្វុង</span>
        </div>

        <div className="cartoon-container">
          <img src={couple} alt="Couple cartoon" className="cartoon-img" />
        </div>
      </div>
    </section >
  )
}
