import React from 'react'
import axios from 'axios'
import DetailImage from "./DetailImage";
import styles from './Details.module.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DetailScreen = () => {  

const {id} = useParams();

const [recipe, setRecipe] = useState([])

useEffect(() => {
axios.get(`https://recipes.devmountain.com/recipes/${id}`)
  .then(res => {
    console.log('call the judge, get some fudge', res.data)
    setRecipe(res.data)
  }) .catch(theseHands => {
    console.log(theseHands)
  })
}, [])

  return (
    <section>
      <DetailImage image={recipe.image_url} title={recipe.recipe_name} />
      <div className={styles.details_container}>
        <div className={styles.detail_half}>
          <div className={styles.ingredients_container}>
            <h2>Recipe</h2>
            <h4>Prep Time: {recipe.prep_time}</h4>
            <h4>Cook Time: {recipe.cook_time}</h4>
            <h4>Serves: {recipe.serves}</h4>
            <br/>
            <h2>Ingredients</h2>
            {recipe.ingredients && recipe.ingredients.map((ing, index) => {
              return <h4>{ing.quantity} {ing.ingredient}</h4>
            })}
          </div>
        </div>

        <div className={styles.instruction_container}>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
