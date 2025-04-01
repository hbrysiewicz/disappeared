// import { useState } from 'react'
import './App.css'
import Card from './Card.tsx'

function App() {
  return (
    <>
      <h1 className="bg-sky-100">Disappeared</h1>
      <h2 className="text-red-900">A collection of the individuals who have gone missing since January 20, 2025</h2>
      <div>
        <Card />
    </div>
    </>
  )
}

export default App
