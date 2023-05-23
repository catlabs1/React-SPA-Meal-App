import { API_URL } from "./config";

//First Looking full meal details by id
const getMealById = async (mealId) => {
    const responce = await fetch(API_URL + "lookup.php?i=" + mealId);
    return await responce.json();
};

//Second All meall categories
const getAllCategories = async () => {
    const responce = await fetch(API_URL + "categories.php");
    return await responce.json();
};

//Third Filter by category
const getFilteredCategory = async (catName) => {
    const responce = await fetch(API_URL + "filter.php?c=" + catName);
    return await responce.json();
};

export {getMealById, getAllCategories, getFilteredCategory};