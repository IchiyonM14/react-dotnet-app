import React, { Fragment } from 'react';
import Button from "../button";
import PropTypes from 'prop-types';

const Recipe = (props) => {
    const { name, notes, items } = props;

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
                <Button className="plain pl-0"><i class="fas fa-pencil-alt mr-2"></i>Edit</Button>
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