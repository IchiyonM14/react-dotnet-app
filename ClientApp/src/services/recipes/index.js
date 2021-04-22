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
        },
        {
            id: 2,
            name: 'Takoyaki',
            notes: 'Simple japanese dish',
            items: [
                { id: 1, name: 'Octopus' },
                { id: 2, name: 'Soja sauce' }
            ]
        },
        {
            id: 3,
            name: 'Ramen',
            notes: 'Complex japanese dish',
            items: [
                { id: 1, name: 'Pork bones' },
                { id: 2, name: 'Pork belly' },
                { id: 3, name: 'Onions' },
                { id: 4, name: 'Green onions' }
            ]
        },
    ]
}