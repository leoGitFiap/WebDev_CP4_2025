import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/produtos" activeClassName="active">
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre" activeClassName="active">
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;