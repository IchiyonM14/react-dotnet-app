import React, { useState } from 'react';

export const PreparationsContext = React.createContext();

export const PreparationsProvider = ({ children }) => {
    const [recipeData, setRecipeData] = useState({});
    const [list, setList] = useState([]);

    const setPreparations = (newItems) => {
        setList(newItems);
    }

    const addPreparation = (item) => {
        const newItems = [...list, item];
        setList(newItems);
    };    

    const setRecipe = (recipe) => {
        setRecipeData(recipe);
    }

    const context = {
        list,
        recipeData,
        setRecipe,
        setPreparations,
        addPreparation
    };

    return (
        <PreparationsContext.Provider value={context}>
            {children}
        </PreparationsContext.Provider>
    );
};
