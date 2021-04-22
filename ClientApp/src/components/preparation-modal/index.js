import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';
import Modal from '../modal';

const INGREDIENTS = [
    {
        id: 1,
        name: 'Onion',
        checked: true,
    },
    {
        id: 2,
        name: 'Eggs',
        checked: false,
    },
    {
        id: 3,
        name: 'Garlic',
        checked: false,
    },
    {
        id: 4,
        name: 'Tomatoes',
        checked: true,
    },
    {
        id: 5,
        name: 'Milk',
        checked: false,
    },
];

const PreparationModal = props => {
    const { isOpen, recipeName, toggle } = props;
    const [ingredients, setIngredients] = useState(INGREDIENTS);

    const onCheckIngredient = (id) => ({ target: { checked } }) => {
        const newIngredients = [...ingredients];
        const index = newIngredients.findIndex(item => item.id === id);

        newIngredients[index].checked = checked;

        setIngredients(newIngredients);
    };

    const renderIngredients = () => {
        return ingredients.map(ingredient => {
            return (
                <div className="PreparationPanel-recipe">
                    <Checkbox
                        checked={ingredient.checked}
                        onChange={onCheckIngredient(ingredient.id)}
                    />
                    <span>{ingredient.name}</span>
                </div>
            );
        });
    };

    return (
        <Modal
            hasFooter={false}
            isOpen={isOpen}
            onClose={toggle}
            title={recipeName}
        >
            <span
                className="mb-0"
                htmlFor="preparation-name"
            >
                Ingredients:
            </span>
            {renderIngredients()}
        </Modal>
    );
};

PreparationModal.defaultProps = {
    recipeName: 'Recipe'
};

PreparationModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    recipeName: PropTypes.string,
    toggle: PropTypes.func.isRequired
};

export default PreparationModal;
