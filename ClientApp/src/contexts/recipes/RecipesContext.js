import React, { useState } from 'react';

export const RecipesContext = React.createContext();

export const RecipesProvider = ({ children }) => {
    const [list, setList] = useState([]);

    const setRecipes = (newReceipes) => {
        setList(newReceipes);
    }

    const addRecipe = (recipe) => {
        const newReceipes = [...list, recipe];

        setList(newReceipes);
    };

    const context = {
        list,
        setRecipes,
        addRecipe
    };

    return (
        <RecipesContext.Provider value={context}>
            {children}
        </RecipesContext.Provider>
    );
};
