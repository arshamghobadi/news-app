import { categories } from '@/components/constants';
import fetchNews from '@/util/fetchNews';

async function Home() {
  const news = await fetchNews(categories.join(','));
  console.log(news);
  return <div>{/* {newslist} */}</div>;
}
export default Home;
