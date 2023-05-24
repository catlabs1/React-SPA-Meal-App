import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/preloader";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);
    return (
        <>
            
            {!recipe.idMeal ? (
                <Preloader />
            ) : (

                <div className="recipe" id="start"> 
                <button className="btn btn-back" onClick={goBack} id="top">
                &larr; Go Back
            </button>
                    <div className="recipe-navigate">
                        <AnchorLink href='#start'>General information</AnchorLink>
                        <AnchorLink href='#instructions'>Instructions</AnchorLink>
                        <AnchorLink href='#ingredients'>Ingredients</AnchorLink>
                        <AnchorLink href='#video-recipe'>Video Recipe</AnchorLink>
                    </div>
                    <div className="recipe-1">
                        <h1 className="recipe-title">{recipe.strMeal}</h1>
                        <div className="recipe-info">
                            <h6>Category: {recipe.strCategory}</h6>&middot;
                            {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                        </div>
                        <img className="recipe-img" src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </div>
                    <h3 id="instructions">Instructions</h3>
                    <p>{recipe.strInstructions}</p>
                    <h3 id="ingredients">Ingredients</h3>
                    <table className="recipe-ingredients">
                        <thead>
                            <tr>
                                <th>Ингредиенты</th>
                                <th>Количество</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes("Ingredient") && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>

                    {recipe.strYoutube ? (
                        // внизу был класс row
                        <div className="recipe-video" id="video-recipe">
                            <h3>
                                Video recipe
                            </h3>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                allowFullScreen
                            />
                        </div>
                    ) : null}
                </div>
            )}
            <AnchorLink href='#top'>
                <button className="btn btn-back">
                    &uarr; Go to top
                </button>
            </AnchorLink>
        </>
    );
}

export { Recipe };
