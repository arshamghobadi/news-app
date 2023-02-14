import fetchNews from '@/util/fetchNews';
import NewsList from '../NewsList';

async function Searchpage({ searchParams }) {
  const news = await fetchNews(true);
  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default Searchpage;
