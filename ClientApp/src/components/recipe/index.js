import React, { useContext, Fragment } from 'react';
import { PreparationsContext } from '../../contexts/recipes/RecipesContext';
import Button from "../button";
import PropTypes from 'prop-types';

const Recipe = (props) => {
    const { id, name, notes, items, preparations } = props;
    const preparationsContext = useContext(PreparationsContext);

    const showPreparations = () => {
        preparationsContext.setRecipe({ id, name, items });
        preparationsContext.setPreparations(preparations);
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
    items: [],
    preparations: []
}

Recipe.propTypes = {
    name: PropTypes.string.isRequired,
    notes: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired
}

export default Recipe;