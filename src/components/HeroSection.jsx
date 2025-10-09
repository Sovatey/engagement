import React from 'react'
import couple from '../assets/couple.gif'
import bg from '../assets/floral-bg-minimal.png'
import './HeroSection.css'
import text from '../assets/text.png'

export default function HeroSection() {
  // Generate 50 hearts
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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Falling Hearts */}
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

      <div className="hero-inner container">
        <h1 className="couple-names">ពិធីចូលចែចូវ</h1>
        <div className="hero-left" data-aos="fade-right">
          {/* <div className="initials">
            <div className="initials-circle">N</div>
            <div className="initials-divider" />
            <div className="initials-circle">T</div>
          </div> */}
          <div className="logo-container">
            <img src={text} alt="Couple Logo" className="couple-logo" />
          </div>
          <h1 className="couple-names">
            ព្រី ណុច{" "}
            <img
              src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/2764.gif"
              alt="heart"
              style={{ width: "30px", verticalAlign: "middle" }}
            />{" "}
            ហែន សុវត្តី
          </h1>
          <p className="date">២៩ ធ្នូ ២០២៥ • ព្រឹក</p>
        </div>

        <div className="hero-right" data-aos="fade-left">
          <img src={couple} alt="Couple cartoon" className="cartoon-img" />
        </div>
      </div>

      <div className="footer-flower"></div>

    </section>
  )
}
