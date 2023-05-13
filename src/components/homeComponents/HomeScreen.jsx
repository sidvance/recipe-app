import React from 'react'
import axios from 'axios'
import AdBanner from './AdBanner'
import RecipeCard from '../RecipeCard'
import { useState } from 'react'
import { useEffect } from 'react'

const HomeScreen = props => { 

  const [recipes, setRecipes] = useState([])

  const {search, setSearch} = props
  
  
  useEffect(() => {
    axios.get("https://recipes.devmountain.com/recipes")
    .then(res => {
      console.log(res.data)
      setRecipes(res.data)
  }).catch(theseHands => {
    console.log(theseHands)})
}, [])

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
    <div>
      <AdBanner/>
      {recipeDisplay}
    </div>

  )
}

export default HomeScreen