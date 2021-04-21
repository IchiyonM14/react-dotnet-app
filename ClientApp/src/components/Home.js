import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import Recipe from "./recipe";
import AddRecipe from "./add-recipe";
import Modal from "./modal";
import PreparationPanel from '../components/preparation-panel';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [ingredients, setIngredients] = useState([{}]);
    const [recipeName, setRecipeName] = useState('');
    const [recipeNotes, setRecipeNotes] = useState('');
    const formClasses = 'form-control mb-3';

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

    return (
        <div>
            <Recipe
                name="Guacamole"
                notes="Notes for the recipe"
                isCompleted
            />
            <AddRecipe onClick={toggleModal} />
            <PreparationPanel />
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
