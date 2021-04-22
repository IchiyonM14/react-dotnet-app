import { fetchData } from "../axios";

export const fetchItems = async () => {
    try {
        const { data } = await fetchData({ url: '/items' });
        return { data };
    } catch (error) {
        return { error }
    }   
}

export const createItems = async (newItems) => {
    try {
        const { data } = await fetchData({
            method: 'POST',
            url: '/items',
            data: { data: newItems }
        });

        return { data };
    } catch (error) {
        return { error };
    }
}