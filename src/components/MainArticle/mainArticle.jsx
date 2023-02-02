// Import CSS
import './mainArticle.scss';

// Import NPM
import React from 'react';

// import Component
import LinkButton from '../WelcomeButton/linkButton';

// Import Data
import Data from '../../data/presentationData';

function MainArticle() {
  return (
    <section className="mainArticle">
      <h1 className="mainArticle--title">
        Titre
      </h1>
      <p className="mainArticle--article">Content of the article</p>
      <LinkButton />
    </section>
  );
}
export default MainArticle;