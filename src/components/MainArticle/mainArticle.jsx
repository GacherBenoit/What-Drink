// Import CSS
import './mainArticle.scss';

// Import NPM
import React from 'react';

// import Component
import LinkButton from '../LinkButton/linkButton';

// Import Data
import Data from '../../data/presentationData';

function MainArticle() {
  return (
    <div className="articles">
      {Data.map((article) => (
        <section key={article.id} className={`main--article ${article.label}--article`}>
          <h1 className="main--article__title">
            {article.title}
          </h1>
          <p className="main--article__paragraph">{article.content}</p>
          <LinkButton buttonClassname="main--article__button" linkClassname="main--article__link" labelName={article.section} />
          <div className="main--article__image">
            <img className="main--article__image__item" src={`/src/assets/images/${article.picture}.jpg`} alt="" />
          </div>
        </section>
      ))}
    </div>
  );
}
export default MainArticle;
