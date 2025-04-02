import { createClient } from 'contentful';

class ContentfulClient {
  client;

  constructor() {
    this.client = createClient({
      accessToken: import.meta.env['CONTENTFUL_API_TOKEN'],
      space: import.meta.env['CONTENTFUL_SPACE_ID'],
    })
  }

  async getPeople() {
    const people = await this.client.getEntries({ content_type: 'missingPerson' });
    return people.items.map((person) => {
      const { fields } = person;
      return {
        name: fields.name,
        description: fields.description,
        image: fields.image.fields.file.url,
      }
    })
  }

  async getNews() {
    const articles = await this.client.getEntries({ content_type: 'newsArticle' });
    return articles.items.map((article) => article.fields);
  }
}

export default ContentfulClient;
