import React from 'react'
import './Timeline.css'
const events = [
  { time: '07:15', title: 'ជួបជុំភ្ញៀវកិត្តិយស'},
  { time: '07:30', title: 'ពិធីចែចូវ និងបំពាក់ចិញ្ចៀន' },
  { time: '08:30', title: 'សែនព្រេនដូនតា និង ចងដៃ'},
  { time: '09:30', title: 'ទទួលភ្ញៀវកិត្តិយសពិសាភោជនាហារ'}
]

export default function Timeline() {
  return (
    <section className="timeline container">
      <h3 className="timeline-title">របៀបវារះកម្មវិធី</h3>
      <div className="timeline-list">
        {events.map((ev, idx) => (
          <div key={idx} className="timeline-item" >
            <div className="timeline-time">{ev.time}</div>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>{ev.title}</h4>
              {/* <p>{ev.desc}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
