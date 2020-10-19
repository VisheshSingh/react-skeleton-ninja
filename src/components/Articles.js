import React, { useState, useEffect } from 'react';
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

      <SkeletonElement type='text' />
      <SkeletonElement type='title' />
      <SkeletonElement type='avatar' />
      <SkeletonElement type='thumbnail' />

      {articles &&
        articles.map((article) => (
          <article key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </article>
        ))}

      {articles.length === 0 && <p>Loading...</p>}
    </div>
  );
};

export default Articles;
