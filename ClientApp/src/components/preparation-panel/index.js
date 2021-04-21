import React, { useContext } from 'react';
import { RecipesContext } from '../../contexts/recipes/RecipesContext';
import Button from '../button';
import Checkbox from '../checkbox';

const PreparationPanel = props => {
    const { list: recipes } = useContext(RecipesContext);

    const renderRecipes = () => {
        return recipes.map(recipe => {
            return (
                <div className="PreparationPanel-recipe">
                    <Checkbox checked={recipe.isPrepared} />
                    <span>{`${recipe.name} - ${recipe.date}`}</span>
                </div>
            );
        });
    }

    return (
        <div className="collapse show PreparationPanel">
            <div className="PreparationPanel-list">
                <span className="PreparationPanel-title">
                    Preprations
                </span>
                {renderRecipes()}
            </div>
            <div>
                <Button
                    className="primary"
                    onClick={() => {}}
                >
                    New
                </Button>
            </div>
        </div>
    );
};

export default PreparationPanel;
