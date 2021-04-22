import React, { useState, useContext, useEffect } from 'react';
import { PreparationsContext } from '../../contexts/recipes/RecipesContext';
import Button from '../button';
import Checkbox from '../checkbox';
import PreparationModal from '../preparation-modal';

const PreparationPanel = (props) => {
    const { reloadData } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
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

    useEffect(() => {
        if (recipeData.id) {
            setIsPanelOpen(true);
        }
    }, [recipeData]);

    const closePanel = () => setIsPanelOpen(false);

    const renderPreparations = () => {
        if (preparations.length === 0 || !recipeData) return;

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
        <div className={`collapse show PreparationPanel ${!isPanelOpen ? 'hidden' : ''}`}>
            <button className="PreparationPanel-close" onClick={closePanel}>&times;</button>
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
                recipeData={recipeData}
                toggle={toggleModal}
                preparation={currentPrep}
                reloadData={reloadData}
            />
        </div>
    );
};

export default PreparationPanel;
