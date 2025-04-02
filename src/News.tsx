import Card from './Card.tsx'
import Header from './Header.tsx';

function News() {
  return (
    <>
      <Header />
      <div className="pt-6 flex gap-4">
        <Card
          name="University student targeted by Trump leaves the US"
          description="A Cornell University graduate student who had his US visa revoked due to protest activities against Israel has chosen to leave the US rather than be deported. Momodou Taal, who is a joint citizen of the UK and The Gambia, had his student visa revoked due to his on-campus protest activities last year as the Israel-Gaza war raged..."
          image="https://ichef.bbci.co.uk/news/1536/cpsprodpb/d02d/live/de1c7040-0e9f-11f0-96d4-0176469b616f.jpg.webp"
          url="https://www.bbc.com/news/articles/c934y9kv07eo"
        />
      </div>
    </>
  )
}

export default News
