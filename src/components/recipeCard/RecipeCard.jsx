import { useNavigate } from "react-router-dom"
import styles from "./RecipeCard.module.css"
import React from "react"

const RecipeCard = props => {

    console.log('can anybody hear me', props)
    
    const navigate = useNavigate()

    const handleClick = () => {
        console.log("handlerClicking")
        navigate(`/recipe/${props.recipe.recipe_id}`)
    }

    return (
        <div className={styles.recipe_card}>
            <div className={styles.recipe_img_container}>
                <img src={props.recipe.image_url}></img>
                <h3 className={styles.cardH3}>{props.recipe.recipe_name}</h3>
                <button className={styles.recipeBtn} onClick={handleClick}>See More</button>
            </div>
        </div>
    )
}

export default RecipeCard