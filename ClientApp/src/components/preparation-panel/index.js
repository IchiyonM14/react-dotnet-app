import React, { useState, useContext } from 'react';
import { RecipesContext } from '../../contexts/recipes/RecipesContext';
import Button from '../button';
import Checkbox from '../checkbox';
import PreparationModal from '../preparation-modal';

const PreparationPanel = props => {
    const [isOpen, setIsOpen] = useState(false);
    const { list: recipes } = useContext(RecipesContext);

    const toggleModal = () => {
        setIsOpen(prevIsOpen => {
            return !prevIsOpen;
        });
    };

    const renderRecipes = () => {
        return recipes.map(recipe => {
            return (
                <div className="PreparationPanel-recipe">
                    <Checkbox checked={recipe.isPrepared} />
                    <span>{`${recipe.name} - ${recipe.date}`}</span>
                </div>
            );
        });
    };

    return (
        <div className="collapse show PreparationPanel">
            <div className="PreparationPanel-list">
                <span className="PreparationPanel-title">
                    Preparations
                </span>
                {renderRecipes()}
            </div>
            <div>
                <Button
                    className="primary"
                    onClick={toggleModal}
                >
                    New
                </Button>
            </div>
            <PreparationModal
                isOpen={isOpen}
                recipeName="Guacamole"
                toggle={toggleModal}
            />
        </div>
    );
};

export default PreparationPanel;
