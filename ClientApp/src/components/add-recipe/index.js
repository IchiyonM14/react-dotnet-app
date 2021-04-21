import React from 'react';
import PropTypes from 'prop-types';

const AddRecipe = (props) => {
    const { onClick } = props;

    return (
        <button onClick={onClick} className="AddRecipe">
            <span className="AddRecipe-icon">
                <i class="fas fa-plus"></i>
            </span>
            <span className="AddRecipe-text">
                Add Recipe
            </span>
        </button>
    )
}

AddRecipe.defaultProps = {
    onClick: () => { }
}

AddRecipe.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default AddRecipe;
