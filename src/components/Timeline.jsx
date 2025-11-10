import React from 'react'
import './Timeline.css'
const events = [
  { time: '06:30', title: 'ពិធីអភិបាល', desc: 'ការអបអរសាទរព្រឹត្តិការណ៍ដ៏សំណព្វ' },
  { time: '07:00', title: 'ពិធីសុទ្ធសាធ', desc: 'សូត្រមន្ត និងសែនសូត្រ' },
  { time: '08:00', title: 'ទទួលភ្ញៀវ', desc: 'សូមអញ្ជើញចូលរួមទទួលភ្ញៀវ' },
  { time: '10:00', title: 'ពិធីអាពាហ៍ពិពាហ៍', desc: 'រាំអញ្ជើញ និងអបអរសាទរ' }
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
