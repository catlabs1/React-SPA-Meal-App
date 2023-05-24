import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";

import { Preloader } from "../components/preloader";
import { MealList } from "../components/mealList";
import { Search } from "../components/search";

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strMeal.toLowerCase().includes(str.toLowerCase())
            )
        );
    };

    useEffect(() => {
        getFilteredCategory(name).then((data) => {
            setMeals(data.meals);
            setCatalog(data.meals);
            setFilteredCatalog(data.meals);
        });
    }, [name]);

    return (
        <>
            <button className="btn btn-back" onClick={goBack}>
                &larr; Go Back
            </button>
            <Search cb={handleSearch} />
            {!meals.length ? <Preloader /> : <MealList meals={filteredCatalog} />}
        </>
    );
}

export { Category };
