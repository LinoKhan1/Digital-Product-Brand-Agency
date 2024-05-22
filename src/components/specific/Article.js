import React from 'react';
import '../../pages/About/about.scss'; // Import your global and home-specific styles
import Image from '../../assets/images/Image1.jpg';

const articles = [
  {
    id: 1,
    title: 'Article 1',
    image: Image,
    description: 'This is a short description of article 1.',
    link: '/article-1'
  },
  {
    id: 2,
    title: 'Article 2',
    image: Image,
    description: 'This is a short description of article 2.',
    link: '/article-2'
  },
  {
    id: 3,
    title: 'Article 3',
    image: Image,
    description: 'This is a short description of article 3.',
    link: '/article-3'
  }
];

const ArticleSection = () => {
  return (
    <section className="article-section">
      <div className="row">
        {articles.map(article => (
          <div className="col" key={article.id}>
            <div className="article">
              <div className="article-image-wrapper">
                <img src={article.image} alt={article.title} className="article-image" />
              </div>
              <h2 className="article-title">{article.title}</h2>
              <div className="article-description">
                <p>{article.description}</p>
                <a href={article.link} className="read-more">Read more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
