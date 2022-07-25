import React from 'react';

const NavBar = () => {
  return (
    <nav className="h-1/6 md:h-1/4 mb-6 md:mb-16">
      <ul className="flex flex-row space-x-12 justify-center md:justify-end">
        <li>
          <a href = '#projects'>Projects</a>
        </li>
        <li>
          <a href = '#contact'>Contact</a>
        </li>
        <li>
          <a
            href = 'https://baottn.github.io/resume'
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
