import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';
import Modal from '../modal';

const PreparationModal = props => {
    const { isOpen, recipeName, toggle, items, preparation } = props;
    const [prepStatus, setPrepStatus] = useState({});

    useEffect(() => {
        if(!preparation || !preparation.status) {
            const newStatus = items.reduce((acc, i) => {
                return { ...acc, [i.name]: false }
            }, {});
            
            setPrepStatus(newStatus);
        }
    }, [items]);

    useEffect(() => {        
        if(preparation && preparation.status) {
            //  Example value "{\"status1\":true,\"status2\":false}"
            const newStatus = JSON.parse(preparation.status);
            setPrepStatus(newStatus);
        }
    }, [preparation])

    const onCheckIngredient = (info) => {
        const { name, checked } = info;
        setPrepStatus((prev) => ({ ...prev, [name]: checked }));
    };

    const renderIngredients = () => {        
        if(prepStatus) {
            return Object.entries(prepStatus).map((itemStatus) => {
                return (
                    <div className="PreparationPanel-recipe">
                        <Checkbox
                            checked={itemStatus[1]}
                            onChange={onCheckIngredient}
                            label={itemStatus[0]}
                            name={itemStatus[0]}
                        />
                    </div>
                )
            });
        }
    };

    return (
        <Modal            
            isOpen={isOpen}
            onClose={toggle}
            title={recipeName}
        >
            <span
                className="d-block mb-4"
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
    toggle: PropTypes.func.isRequired,
    status: PropTypes.string
};

export default PreparationModal;
