import React, { useState, useEffect } from 'react';
import SkeletonArticle from '../skeletons/SkeletonArticle';
import SkeletonElement from '../skeletons/SkeletonElement';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await res.json();
      setArticles(data);
    }, 5000);
  }, []);

  return (
    <div className='articles'>
      <h2>Articles</h2>

      {articles &&
        articles.map((article) => (
          <article key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </article>
        ))}

      {articles.length === 0 && <SkeletonArticle />}
    </div>
  );
};

export default Articles;
