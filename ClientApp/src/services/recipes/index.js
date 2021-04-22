import { fetchData } from "../axios";

export const fetchRecipes = async () => {
    try {
        const { data } = await fetchData({ url: '/recipes' });
        return { data };
    } catch (error) {
        return { error }
    }   
}

export const createRecipe = async (newRecipe) => {
    try {
        const { data } = await fetchData({
            method: 'POST',
            url: '/recipes',
            data: {...newRecipe}
        });

        return { data };
    } catch (error) {
        return { error };
    }
}