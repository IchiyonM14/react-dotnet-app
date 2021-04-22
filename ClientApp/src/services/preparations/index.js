import { fetchData } from "../axios";

export const createPreparation = async (newRecipe) => {
    try {
        const { data } = await fetchData({
            method: 'POST',
            url: '/preparations',
            data: { ...newRecipe }
        });

        return { data };
    } catch (error) {
        return { error };
    }
}

export const updatePreparation = async (id, recipeData) => {
    try {
        const { data } = await fetchData({
            method: 'PUT',
            url: `/preparations/${id}`,
            data: { ...recipeData }
        });

        return { data };
    } catch (error) {
        return { error };
    }
}