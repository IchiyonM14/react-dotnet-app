import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const AlertMessage = props => {
    const { message, type } = props;
    const customClass = `alert alert-${type} alert-dismissible fade show`;

    // return (
    //     <div
    //         className={customClass}
    //         role="alert"
    //     >
    //         <p>{message}</p>
    //         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //         </button>
    //     </div>
    // );
    return (
        <Alert color={type}>
            {message}
        </Alert>
    )
};

AlertMessage.defaultProps = {
    type: 'primary'
};

AlertMessage.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning'
    ])
};

export default Alert;
