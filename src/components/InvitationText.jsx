import React from 'react'

export default function InvitationText() {
  return (
    <section className="invitation container" data-aos="fade-up">
      <div className="panel">
        <h2 className="title-kh">សូមអញ្ជើញចូលរួមពិធីរៀបការ</h2>

        <div className="names-row">
          <div className="name-block">
            <p className="role">ភេទ</p>
            <p className="name">ភីត្រោ</p>
          </div>
          <div className="name-block">
            <p className="role">ភេទ</p>
            <p className="name">លិចឡា</p>
          </div>
        </div>

        <p className="body-text">
          សេចក្តីសូមអញ្ជើញចូលរួមក្នុងពិធីរៀបការរបស់យើងនៅថ្ងៃ ១២ កញ្ញា ២០២៥។ សូមអរគុណសម្រាប់ការចូលរួម និងសេចក្តីស្រលាញ់របស់អ្នក។
        </p>

        <div className="cta-row">
          <button className="btn-primary">បញ្ជាក់វត្តមាន</button>
          <button className="btn-outline">ទំនាក់ទំនង</button>
        </div>
      </div>
    </section>
  )
}
