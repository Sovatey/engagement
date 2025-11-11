import React from 'react';
import bg from '../assets/floral-bg-minimal.png';
import './InvitationText.css';
import text from '../assets/text.png'
import Divider, { DateDisplay,CountdownImage } from './components'
import Timeline from './Timeline';
import Location from './Location';
import Footer from './Footer';

export default function InvitationText() {
  const hearts = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 10 + Math.random() * 20,
    duration: 5 + Math.random() * 5,
    delay: Math.random() * 5,
  }));

  return (
    <section className="invitation">
      {/* Background */}
      <div
        className="invitation-bg"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Falling hearts */}
      <div className="falling-hearts">
        {hearts.map(h => (
          <div
            key={h.id}
            className="heart"
            style={{
              left: `${h.left}%`,
              fontSize: `${h.size}px`,
              animationDuration: `${h.duration}s`,
              animationDelay: `${h.delay}s`,
            }}
          >
            💛
          </div>
        ))}
      </div>

      {/* Scrollable card */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '80%',
          maxWidth: '500px',
          minHeight: '100vh',
          margin: '0 auto',
          padding: '4vmin 2vmin',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',  // start at top
          alignItems: 'center',
          textAlign: 'center',

          background: 'rgba(255, 255, 255, 0.5)', // mostly white, very bright
          borderRadius: 0,                          // no radius
          border: 'none',
          boxShadow: 'none',

          maxHeight: '90vh',   // allow scroll if content is taller than viewport
          overflowY: 'auto',   // enable vertical scrolling

          transition: 'background 0.3s ease', // smooth transition if needed
          /* Hide scrollbar */
          scrollbarWidth: 'none',  // Firefox
          msOverflowStyle: 'none', // IE 10+
        }}
      >
        {/* <h2 style={{ fontSize: 'clamp(22px, 6vw, 48px)', color: '#333', marginBottom: '2vmin' }}>
          សូមអញ្ជើញចូលរួមពិធីចូលចែចូវ
        </h2> */}

        <h2
          style={{
            fontSize: 'clamp(20px, 3vw, 24px)', // ✅ smaller max and gentler scaling
            color: '#b8860b',
            marginBottom: '2vmin',
          }}
        >
          មានកិត្តិយសសូមគោរពអញ្ជើញ
        </h2>
        <Divider />
        <p style={{ fontSize: 'clamp(14px, 3vw, 14px)', margin: ' 0', color: '#444' }}>
          ឯកឧត្តម អ្នកឧកញ៉ា លោកជំទាវ លោក លោស្រី អ្នកនាង កញ្ញា និងប្រិយមិត្តអញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យសិរីសួស្ដី ជ័យមង្គល ក្នុងពិធីចូលចែចូវ កូនប្រុស-ស្រី របស់យើងទាំងពីរ។
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', // ✅ centers vertically
            gap: '20px',
            // marginBottom: '2vmin',
          }}
        >

          {/* Groom side */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontWeight: 'bold', color: '#b8860b' }}>កូនប្រុស</p>
            <p style={{ fontSize: '1.1rem' }}>ព្រី ណុច</p>
          </div>

          {/* Couple logo (smaller and centered) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={text}
              alt="Couple Logo"
              style={{
                width: '100px',
                height: 'auto',
                objectFit: 'contain',
                margin: '0 10px',
              }}
            />
          </div>

          {/* Bride side */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontWeight: 'bold', color: '#b8860b' }}>កូនស្រី</p>
            <p style={{ fontSize: '1.1rem' }}>ហែន សុវត្តី</p>
          </div>
        </div>


        <DateDisplay />
        <p style={{ fontSize: 'clamp(14px, 3vw, 14px)', margin: '20px 0', color: '#444' }}>
          ត្រូវនឹងថ្ងៃទី ១០ កើត ខែបុស្ស ឆ្នាំម្សាញ់ សប្ដស័ក ព.ស ២៥៦៩ ស្ថិតនៅ <b>ភោជនីយដ្ឋានវ័នម៉រ (បន្ទប់ នាងសួស្ដី)</b>
        </p>

        <CountdownImage targetDate="2025-12-29T07:00:00" />
        <Timeline/>
        <Location/>
        <Footer/>
      </div>

    </section>
  );
}
