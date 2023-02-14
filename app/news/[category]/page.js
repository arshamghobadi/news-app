import NewsList from '@/app/NewsList';
import fetchNews from '@/util/fetchNews';
import React from 'react';

async function NewsCategory({ params: { category } }) {
  const news = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />;
    </div>
  );
}

export default NewsCategory;
