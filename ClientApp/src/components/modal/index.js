import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from "../button";

const CustomModal = (props) => {
    const { title, onClose, children, hasFooter, isOpen, onSave } = props;
    const [modal, setModal] = useState(isOpen);

    useEffect(() => {
        setModal(isOpen);
    }, [isOpen]);

    const toggle = () => {
        setModal(!modal);

        if (onClose && typeof onClose === 'function') {
            onClose();
        }
    }

    const handleSaveClick = () => {
        if(onSave && typeof onSave === 'function') {
            onSave();
        }

        toggle();
    }

    const renderFooter = () => {
        if (!hasFooter) return;
        return (
            <ModalFooter className="Modal-footer">
                <Button className="primary" onClick={handleSaveClick}>Save</Button>
            </ModalFooter>
        )
    }

    return (
        <Modal isOpen={modal} toggle={toggle} className="Modal">
            <ModalHeader toggle={toggle} className="Modal-header">{title}</ModalHeader>
            <ModalBody className="Modal-body">
                {children}
            </ModalBody>
            { renderFooter()}
        </Modal>
    )
}

CustomModal.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    children: PropTypes.any.isRequired,
    hasFooter: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired
}

CustomModal.defaultProps = {
    onClose: () => { },
    onSave: () => { },
    hasFooter: true,
    isOpen: false
}

export default CustomModal;
