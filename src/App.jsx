import React, { useState } from 'react'
import HeroSection from './components/HeroSection'
import InvitationText from './components/InvitationText'
import './index.css'

export default function App() {
  const [showInvitation, setShowInvitation] = useState(false)

  return (
    <div className="app-root">
      {!showInvitation ? (
        <HeroSection onNext={() => setShowInvitation(true)} />
      ) : (
        <InvitationText />
      )}
    </div>
  )
}
