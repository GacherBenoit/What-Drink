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
    <section className="main--Article">
      <h1 className="main--Article__title">
        Titre
      </h1>
      <p className="main--article-__article">Content of the article</p>
      <LinkButton buttonClassname="main--article__button" linkClassname="main--article__link" />
    </section>
  );
}
export default MainArticle;
