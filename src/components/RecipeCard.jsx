import { useNavigate } from "react-router-dom"

const RecipeCard = recipe => {

    const navigate = useNavigate()

    const handleClick = () => {
        console.log("handlerClicking")
        navigate(`/recipe/${recipe.recipe_id}`)
        console.log(`${recipe.recipe_id}`)
    }

    return (
        <div className="recipe-card-container">
            <div className="recipe-card">
                <img src="https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg"></img>
                <h3>Ratpatootie</h3>
                <button onClick={handleClick}>See More</button>
            </div>
        </div>
    )
}

export default RecipeCard