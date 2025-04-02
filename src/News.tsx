import useSWR from 'swr';
import Card from './Card.tsx'
import Header from './Header.tsx';
import ContentfulClient from './contentful.ts';

async function renderNewsArticles() {
  const client = new ContentfulClient();
  const articles = await client.getNews();
  return articles.map((article) => {
    return (
      <Card
        name={article.title}
        description={article.description}
        url={article.url}
        image={article.imageUrl}
      />
    )
  });
}

function News() {
  const { data } = useSWR('contentfulNewsArticles', renderNewsArticles)
  const articles = data

  return (
    <>
      <Header />
      <div className="pt-6 flex gap-4">
        {articles}
      </div>
    </>
  )
}

export default News
