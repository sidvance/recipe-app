import React from 'react'
import axios from 'axios'
import AdBanner from './AdBanner'
import RecipeCard from '../recipeCard/RecipeCard'
import { useState } from 'react'
import { useEffect } from 'react'

const HomeScreen = props => { 

  const [recipes, setRecipes] = useState([])

  const {search, setSearch} = props

  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes")
    .then(res => {
      console.log("grabbing recipes", res.data)
      setRecipes(res.data)
  }).catch(theseHands => {
      console.log(theseHands)
    })
  }
  
  useEffect(() => {
    getRecipes()
  }, [])

  const recipeDisplay = recipes
      .filter((recipe, index) => {
          let title = recipe.recipe_name.toLowerCase()
          let searchParams = search.toLowerCase()
          return title.includes(searchParams) && (title)
      })
      .map((recipe, index) => {
          return <RecipeCard recipe={recipe}/>
      })

  return (
    <div>
      <AdBanner/>
      <div class="recipe-card-container">
        {recipeDisplay}
      </div>
    </div>

  )
}

export default HomeScreen