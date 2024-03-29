'use client';

import { useRouter } from 'next/navigation';

function ReadMoreButton({ article }) {
  const router = useRouter();
  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    const url = `/article/article?${queryString}`;

    router.push(url);
  };
  return (
    <button
      className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-400"
      onClick={handleClick}
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
