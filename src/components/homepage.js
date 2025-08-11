import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
  const navigate = useNavigate()

  return (
    <main>
      <h1>Homepage</h1>
      <button onClick={() => navigate('/auth')}>Go to Login / Signup</button>
    </main>
  )
}