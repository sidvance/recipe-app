import React from "react";
import {Link, NavLink} from 'react-router-dom'
import { useState } from "react";

const Header = () => {

  const {search, setSearch} = useState('')

  const recipeDisplay = recipes
    .filter((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe, index) => {
        return <RecipeCard recipe={recipe}/>
    })

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
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a recipe"
        />
      </span>
    </header>
  );
};

export default Header;
