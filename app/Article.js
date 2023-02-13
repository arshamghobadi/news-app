'use client';
import { motion } from 'framer-motion';
function Article({ article }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
    >
      <article>
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
        </div>
      </article>
    </motion.div>
  );
}

export default Article;
