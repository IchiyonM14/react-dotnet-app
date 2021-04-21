import React from 'react';
import Checkbox from "../checkbox";
import Button from "../button";
import PropTypes from 'prop-types';

const Recipe = (props) => {
    const { name, notes, isCompleted } = props;

    return (
        <div className="Recipe">
            <button className="Recipe-delete"><i class="far fa-times-circle"></i></button>
            <p className="Recipe-name">{ name }</p>
            <p className="Recipe-notes">{ notes }</p>
            <div className="Recipe-controls">
                <Checkbox name="completed" checked={isCompleted} label="Made It" />
                <Button className="plain"><i class="fas fa-pencil-alt mr-2"></i>Edit</Button>
            </div>            
        </div>
    )
}

Recipe.defaultProps = {
    isCompleted: true
}

Recipe.propTypes = {
    name: PropTypes.string.isRequired,
    notes: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired
}

export default Recipe;