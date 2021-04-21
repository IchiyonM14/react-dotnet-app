import fetchData from "../axios";

export const fetchRecipes = async () => {
    // const recipesData = await fetchData({ url: '' });
    return [
        {
            id: 1,
            name: 'Oyakodon',
            notes: 'Simple japanese dish',
            items: [
                { id: 1, name: 'Chicken' },
                { id: 2, name: 'Rice' },
                { id: 3, name: 'Onions' }
            ]
        }
    ]
}