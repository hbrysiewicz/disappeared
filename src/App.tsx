// import { useState } from 'react'
import './App.css'
import Card from './Card.tsx'
import Header from './Header.tsx';

function App() {
  return (
    <>
      <Header />
      <div className="pt-6 flex gap-4">
        <Card
          name="Arturo Suárez Trejo"
          description="Suárez, a 33-year-old native of Caracas, Venezuela, made his last call to his wife on March 14, 2025. Later, she would notice him in the propaganda images released by his hummingbird tattoo on his neck."
          image="/arturo.png"
        />
        <Card
          name="Neri Alvarado Borges"
          description="Alvarado was deeply devoted to helping his autistic brother of 15. He was close with his boss, owner of two Venezuelan bakeries, who visited him after he was detained in early February."
          image="/neri.png"
        />
        <Card
          name="Rumeysa Ozturk"
          description="The 30 year old PhD student was approached by 6 plain-clothes ICE agents on her way to dinner and kidnapped because of an op-ed piece she wrote in the school newspaper about the genocide in Palestinian by Israel"
          image="/rumeysa.png"
        />
        <Card
          name="Frizgeralth de Jesus Cornejo Pulgar"
          description="Recognized in the propaganda photos released by the American Government depicting the terrible deportation of innocent men by his rose tattoo upon his neck, Frizgeralth was lawfully awaiting an immigration hearing that is still scheduled for April 10."
          image='/frizgeralth.png'
        />
    </div>
    </>
  )
}

export default App
