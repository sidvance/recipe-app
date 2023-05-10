import React from 'react'
import axios from 'axios'
import AdBanner from './AdBanner'
import RecipeCard from '../RecipeCard'
import { useState } from 'react'
import { useEffect } from 'react'

const HomeScreen = () => { 

  const {recipes, setRecipes} = useState([])
  
  
  useEffect(() => {
    axios.get("https://recipes.devmountain.com/recipes")
    .then(res => {
      console.log(res.data)
      setRecipes(res.data)
  }).catch(theseHands => {
    console.log(theseHands)})
}, [])

  return (
    <div>
      <AdBanner/>
      <RecipeCard/>
    </div>
  )
}

export default HomeScreen