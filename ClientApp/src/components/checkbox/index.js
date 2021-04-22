import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const CustomCheckbox = (props) => {
    const { onChange, checked, label, name } = props;
    const [isChecked, setIsChecked] = useState(checked);
    const [uniqueId] = useState(uuidv4());

    useEffect(() => {
        setIsChecked(checked);        
    }, [checked])

    const renderCheck = () => {
        if(isChecked) {
            return <i class="fas fa-check"></i>
        }
    }

    const handleChange = (e) => {
        if(onChange && typeof onChange === 'function') {
            onChange({ name, checked: e.target.checked });
        }

        setIsChecked(e.target.checked)
    }

    return (
        <span className="Checkbox">
            <span className="Checkbox-icon">
                { renderCheck() }
            </span>
            <input onChange={handleChange} className="d-none" type="checkbox" name={uniqueId} id={uniqueId} />
            <label htmlFor={uniqueId} className="Checkbox-label">{ label }</label>
        </span>
    )
}

CustomCheckbox.defaultProps = {
    checked: false
}

CustomCheckbox.propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default CustomCheckbox;

