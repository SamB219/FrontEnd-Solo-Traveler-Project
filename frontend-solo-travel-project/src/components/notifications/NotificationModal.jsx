import React from 'react';

const NotificationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div style={styles.modal}>
            <span style={styles.close} onClick={onClose}>&times;</span>
            <p>No new notifications!</p>
        </div>
    );
};

const styles = {
    modal: {
        position: 'absolute',
        top: '70px', 
        right: '22px', 
        width: '350px',
        backgroundColor: 'white',
        border: '2px solid #ccc',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        padding: '12px',
        borderRadius: '5px',


    },
    close: {
        position: 'absolute',
        top: '3px',
        right: '10px',
        fontSize: '20px',
        cursor: 'pointer',
    },
};

export default NotificationModal;
