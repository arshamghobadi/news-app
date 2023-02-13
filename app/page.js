import { categories } from '@/components/constants';
import fetchNews from '@/util/fetchNews';
import NewsList from './NewsList';

async function Home() {
  const news = await fetchNews(categories.join(','));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
export default Home;
