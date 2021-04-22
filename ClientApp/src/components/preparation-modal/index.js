import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';
import Modal from '../modal';
import { createPreparation, updatePreparation } from "../../services/preparations";

const PreparationModal = props => {
    const { isOpen, recipeData, toggle, preparation, reloadData } = props;
    const [prepStatus, setPrepStatus] = useState({});

    useEffect(() => {
        if (!preparation || !preparation.status) {
            const newStatus = recipeData?.items?.reduce((acc, i) => {
                return { ...acc, [i.name]: false }
            }, {});

            setPrepStatus(newStatus);
        }
    }, [recipeData]);

    useEffect(() => {
        if (preparation && preparation.status) {
            const newStatus = JSON.parse(preparation.status);
            setPrepStatus(newStatus);
        }
    }, [preparation]);

    const onClose = () => {
        const newStatus = { ...prepStatus };

        Object.keys(newStatus).forEach(item => {
            newStatus[item] = false;
        });

        setPrepStatus(newStatus);

        if (toggle && typeof toggle === 'function')
            toggle();
    }

    const onCheckIngredient = (info) => {
        const { name, checked } = info;
        setPrepStatus((prev) => ({ ...prev, [name]: checked }));
    };

    const onSave = async () => {
        const data = JSON.stringify(prepStatus);

        if (preparation && preparation.status) {
            await updatePreparation(preparation.id, { ...preparation, status: data });
            await reloadData(recipeData.id);
        } else {
            await createPreparation({ RecipeId: recipeData.id, Status: data });
            await reloadData(recipeData.id);
        }
    };

    const renderIngredients = () => {
        if (prepStatus) {
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
            onClose={onClose}
            onSave={onSave}
            title={recipeData.name}
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
    recipeData: {
        name: 'Recipe',
        id: 0,
        items: []
    }
};

PreparationModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    recipeName: PropTypes.any,
    toggle: PropTypes.func.isRequired,
    status: PropTypes.string
};

export default PreparationModal;
