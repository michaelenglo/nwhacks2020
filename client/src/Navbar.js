import React from 'react';
import 'Navbar.scss';
import env from 'env';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="/"><img width="125"src={`${env.IMG_ENDPOINT}/queueUp.svg`} alt="Queue Up!"/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};
