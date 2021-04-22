import { fetchData } from "../axios";

const url = '/recipes';
const userId = "6d0c8acd-d117-41fa-bdbd-8e3b88c4abdc";

export const fetchRecipes = async () => {
    try {
        const { data } = await fetchData({ url });
        return { data };
    } catch (error) {
        return { error }
    }
};

export const createRecipe = async (newRecipe) => {
    try {
        const { data } = await fetchData({
            method: 'POST',
            url,
            data: { ...newRecipe }
        });

        return { data };
    } catch (error) {
        return { error };
    }
};

export const deleteRecipe = async (id) => {
    try {
        const { data } = await fetchData({
            method: 'DELETE',
            url: `${url}/${id}`
        });
        console.log(data);

        return { data };
    } catch (error) {
        return { error };
    }
};
