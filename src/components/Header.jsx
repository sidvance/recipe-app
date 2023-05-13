import React from "react"
import {Link, NavLink} from 'react-router-dom'
import { useState } from "react"
import { BiSearchAlt2 } from "react-icons/bi";

const Header = props => {

  const {search, setSearch} = props

  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
        <NavLink to="">
          <button>Home</button>
        </NavLink>
        <NavLink to="/newRecipe">
          <button>Add Recipe</button>
        </NavLink>
      </nav>
      <span>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search for a recipe"
        />
      </span>
    </header>
  );
};

export default Header;
