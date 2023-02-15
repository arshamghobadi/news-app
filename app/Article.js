'use client';
import { motion } from 'framer-motion';
import LiveTimestamp from './LiveTimestamp';
import ReadMoreButton from './ReadMoreButton';
function Article({ article }) {
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:shadow-lg hover:scale-105 hover:bg-slate-200 transition-all duration-200 ease-out">
      {article.image && (
        <motion.img
          className="h-56 w-full object-cover rounded-t-lg shadow-md "
          src={article.image}
          alt={article.title}
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-4">{article.description}</p>
          </section>
          <footer>
            <p>{article.source}</p>
            <p>{article.published_at}</p>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}

export default Article;
