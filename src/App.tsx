import useSWR from 'swr';
import './App.css'
import Card from './Card.tsx'
import Header from './Header.tsx';
import ContentfulClient from './contentful.ts';

async function renderMissingPeople() {
  const client = new ContentfulClient();
  const people = await client.getPeople();
  return people.map((person) => {
    return (
      <Card
        name={person.name}
        description={person.description}
        image={person.image}
        key={person.name}
      />
    )
  });
}

function App() {
  const { data } = useSWR('contentful', renderMissingPeople)
  const people = data

  return (
    <>
      <Header />
      <div className="pt-6 flex gap-4">
        { people }
      </div>
    </>
  )
}

export default App;
