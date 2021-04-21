import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = (props) => {
    const { onClick, className, children } = props;
    
    return (
        <button onClick={onClick} className={`Button ${className}`}>{ children }</button>
    )
}

CustomButton.defaultProps = {
    onClick: () => {},
    className: 'primary'
}

CustomButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.oneOf(['primary', 'clear', 'plain']),
    children: PropTypes.any.isRequired
}

export default CustomButton;