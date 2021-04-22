import React, { useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import Recipe from "./recipe";
import AddRecipe from "./add-recipe";
import Modal from "./modal";
import Button from "./button";
import { fetchRecipes } from "../services/recipes";

const Home = () => {
    const [recipes, setRecipes] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [ingredients, setIngredients] = useState([{}]);
    const [recipeName, setRecipeName] = useState('');
    const [recipeNotes, setRecipeNotes] = useState('');
    const formClasses = 'form-control mb-3';

    useEffect(() => {
        const loadRecipes = async () => {
            const data = await fetchRecipes();
            setRecipes(data);
        }

        loadRecipes();
    }, []);

    const toggleModal = () => {
        setIsOpen(prevIsOpen => {
            return !prevIsOpen;
        });
    };

    const handleMultiselectChange = (newValue) => {
        setIngredients(newValue);
    }

    const onChangeInput = onChange => ({ target: { value } }) => {
        onChange(value);
    };

    const renderRecipes = () => {
        if (recipes.length === 0) return;
        return recipes.map((r) => {
            return (
                <Recipe
                    key={r.id}
                    id={r.id}
                    name={r.name}
                    notes={r.description}
                    items={r.items}
                />
            )
        });
    }

    return (
        <div className="Home">
            <div className="Home-header">
                <h1>Your Recipes:</h1>
                <Button className="primary" onClick={toggleModal}>Add Recipe</Button>
            </div>
            <div className="Home-recipes">
                {renderRecipes()}
            </div>
            <AddRecipe onClick={toggleModal} />
            <Modal
                title="Recipe:"
                isOpen={isOpen}
                onClose={toggleModal}
            >
                <label
                    className="mb-0"
                    htmlFor="recipe-name"
                >
                    Name:
                </label>
                <input
                    id="recipe-name"
                    className={formClasses}
                    onChange={onChangeInput(setRecipeName)}
                    value={recipeName}
                />
                <label
                    className="mb-0"
                    htmlFor="recipe-notes"
                >
                    Notes:
                </label>
                <textarea
                    id="recipe-notes"
                    className={formClasses}
                    onChange={onChangeInput(setRecipeNotes)}
                    value={recipeNotes}
                />
                <label
                    className="mb-0"
                    htmlFor="recipe-ingredients"
                >
                    Ingredients:
                </label>
                <CreatableSelect
                    id="recipe-ingredients"
                    isMulti
                    onChange={handleMultiselectChange}
                    options={ingredients}
                />
            </Modal>
        </div>
    );
};

export default Home;
