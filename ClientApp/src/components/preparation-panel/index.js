import React, { useState, useContext } from 'react';
import { PreparationsContext } from '../../contexts/recipes/RecipesContext';
import Button from '../button';
import Checkbox from '../checkbox';
import PreparationModal from '../preparation-modal';

const PreparationPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPrep, setCurrentPrep] = useState();
    const { list: preparations, recipeData } = useContext(PreparationsContext);

    const toggleModal = () => {
        setCurrentPrep(null);
        setIsOpen(prevIsOpen => {
            return !prevIsOpen;
        });
    };

    const toggleModalForEdit = (prep) => () => {
        setCurrentPrep(prep);
        setIsOpen(prevIsOpen => {
            return !prevIsOpen;
        });
    }

    const renderPreparations = () => {
        if(preparations.length === 0 || !recipeData) return;
        
        return preparations.map(p => {
            const isPrepared = p.status.search('false') === -1;
            return (
                <button className="PreparationPanel-prep" onClick={toggleModalForEdit(p)}>
                    <Checkbox ignoreEvents checked={isPrepared} label={recipeData.name} />
                </button>
            );
        });
    };

    return (
        <div className="collapse show PreparationPanel">
            <div className="PreparationPanel-list">
                <span className="PreparationPanel-title">
                    Preparations
                </span>
                {renderPreparations()}
            </div>
            <div>
                <Button
                    className="primary"
                    onClick={toggleModal}
                >
                    New
                </Button>
            </div>
            <PreparationModal
                isOpen={isOpen}
                recipeName={recipeData.name || "Recipe"}
                toggle={toggleModal}
                items={recipeData.items || []}
                preparation={currentPrep}
            />
        </div>
    );
};

export default PreparationPanel;
