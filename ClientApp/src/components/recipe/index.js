import React, { useContext, Fragment } from 'react';
import { RecipesContext } from '../../contexts/recipes/RecipesContext';
import Button from "../button";
import PropTypes from 'prop-types';

const PREPARATIONS = [
    {
        name: 'Guacamole',
        date: '19/04/2021',
        isPrepared: false
    },
    {
        name: 'Guacamole',
        date: '12/04/2021',
        isPrepared: false
    },
    {
        name: 'Guacamole',
        date: '30/03/2021',
        isPrepared: true
    },
    {
        name: 'Guacamole',
        date: '24/03/2021',
        isPrepared: false
    },
];

const Recipe = (props) => {
    const { name, notes, items } = props;
    const recipesContext = useContext(RecipesContext);

    const showPreparations = () => {
        recipesContext.setRecipes(PREPARATIONS);
    };

    const renderItems = () => {
        if (!items || !items.length) return;
        return (
            <Fragment>
                <p className="Recipe-subtitle">Ingredients:</p>
                <ul className="Recipe-items">
                    {
                        items.map((i) => {
                            return <li key={i.id} className="Recipe-item">{i.name}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    return (
        <div className="Recipe">
            <button className="Recipe-delete"><i class="far fa-times-circle"></i></button>
            <p className="Recipe-name">{name}</p>
            <p className="Recipe-notes">{notes}</p>
            { renderItems()}
            <div className="Recipe-controls">
                <Button
                    className="primary"
                    onClick={showPreparations}
                >
                    View
                </Button>
            </div>
        </div>
    )
}

Recipe.defaultProps = {
    isCompleted: true,
    items: [{ id: 1, name: "Aguacate" }, { id: 2, name: "Cebolla" }, { id: 3, name: "Tomate" }]
}

Recipe.propTypes = {
    name: PropTypes.string.isRequired,
    notes: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired
}

export default Recipe;