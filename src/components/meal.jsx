import { Link } from "react-router-dom";

function Meal(props) {
    const { strMeal, idMeal, strMealThumb } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img className="meal-card-image" src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn btn-choose">
                    Watch Recipe
                </Link>
            </div>
        </div>
    );
}

export { Meal };