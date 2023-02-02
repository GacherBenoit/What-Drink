// Import CSS
import './mainArticle.scss';
import '../linkButton/linkButton.scss';

// Import NPM
import React from 'react';

// import Component
import LinkButton from '../linkButton/linkButton';

// Import Data
import Data from '../../data/presentationData';

function MainArticle() {
  return (
    <div className="articles">
      {Data.map((article) => (
        <section key={article.id} className="main--article">
          <h1 className="main--article__title">
            {article.title}
          </h1>
          <p className="main--article__paragraph">{article.content}</p>
          <LinkButton buttonClassname="main--article__button" linkClassname="main--article__link" />
        </section>
      ))}
    </div>
  );
}
export default MainArticle;
