// import { useState } from 'react'
import './App.css'
import Card from './Card.tsx'

function App() {
  return (
    <>
      <h1 className="font-bold text-4xl">Disappeared</h1>
      <h2 className="italic">A collection of the individuals who have gone missing since January 20, 2025</h2>
      <div className="pt-6 flex gap-4">
        <Card 
          name="Arturo Suárez Trejo" 
          description="Suárez, a 33-year-old native of Caracas, Venezuela, made his last call to his wife on March 14, 2025. Later, she would notice him in the propoganda images released by his hummingbird tattoo on his neck." 
          image="/20250325_Arturo-Suarez-Performing-and-on-call_990.webp"
        />
        <Card
          name="Neri Alvarado Borges"
          description="Alvarado was deeply devoted to helping his autistic brother of 15. He was close with his boss, owner of two Venezuelen bakeries, who visited him after he was detained in early February."
          image="/0326_tattoos-neri_400.webp"
        />
    </div>
    </>
  )
}

export default App
