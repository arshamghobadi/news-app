import { gql } from 'graphql-request';
import sortNewsNyImage from './sortNewsNyLmage';
const fetchNews = async (category, isDynamic, keywords) => {
  const query = gql`
    query myQuery {
      myQuery(access_key: "7ee0f7cb089685d59e4aa7af247ffa7f", countries: "gb") {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const res = await fetch(
    'https://asmara.stepzen.net/api/opining-alligator/__graphql',
    {
      method: 'POST',
      cache: isDynamic ? 'no-cache' : 'default',
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        'content-type': 'application/json',
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        // variables: {
        //   access_key: process.env.MEDIASTACK_API_KEY,
        //   categories: category,
        // },
      }),
    }
  );
  const newsRewsponse = await res.json();
  const news = sortNewsNyImage(newsRewsponse.data.myQuery);

  return news;
};

export default fetchNews;

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=7ee0f7cb089685d59e4aa7af247ffa7f&search=abc&categories=business,sports&limit=100"
