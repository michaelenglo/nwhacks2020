import React from 'react';
import 'Navbar.scss';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">Queue Up!</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};
