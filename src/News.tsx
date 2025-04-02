import Card from './Card.tsx'
import Header from './Header.tsx';

function News() {
  return (
    <>
      <Header />
      <div className="pt-6 flex gap-4">
        <Card
          name="BBC: University student targeted by Trump leaves the US"
          description="A Cornell University graduate student who had his US visa revoked due to protest activities against Israel has chosen to leave the US rather than be deported. Momodou Taal, who is a joint citizen of the UK and The Gambia, had his student visa revoked due to his on-campus protest activities last year as the Israel-Gaza war raged..."
          image="https://ichef.bbci.co.uk/news/1536/cpsprodpb/d02d/live/de1c7040-0e9f-11f0-96d4-0176469b616f.jpg.webp"
          url="https://www.bbc.com/news/articles/c934y9kv07eo"
        />
        <Card
          name="Mother Jones: You’re Here Because of Your Tattoos"
          description="On Friday, March 14, Arturo Suárez Trejo called his wife, Nathali Sánchez, from an immigration detention center in Texas. Suárez, a 33-year-old native of Caracas, Venezuela, explained that his deportation flight had been delayed. He told his wife he would be home soon. Suárez did not want to go back to Venezuela. Still, there was at least a silver lining..."
          image="https://www.motherjones.com/wp-content/uploads/2025/03/20250325_ice-tattoos_2000.jpg?w=2000&h=1125&crop=1"
          url="https://www.motherjones.com/politics/2025/03/trump-el-salvador-venezulea-deportation-prison-cecot-bukele/"
          />
      </div>
    </>
  )
}

export default News
