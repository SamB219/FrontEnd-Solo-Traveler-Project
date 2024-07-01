import React, { useEffect, useState } from 'react';
import { baseURL } from '../../environment';

const NotificationModal = ({ isOpen, onClose }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        if (isOpen) {
            fetchNotifications();
        }
    }, [isOpen]);

    const fetchNotifications = async () => {
        try {
            const token = localStorage.getItem('token'); 

            const response = await fetch(`${baseURL}/notification/messages`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch notifications');
            }

            const data = await response.json();
            setNotifications(data.notifications);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div style={styles.modal}>
            <span style={styles.close} onClick={onClose}>&times;</span>
            <div style={styles.notificationContainer}>
                {notifications.length === 0 ? (
                    <p>No new notifications!</p>
                ) : (
                    notifications.map((notification, index) => (
                        <p key={index}>{notification.message}</p>
                    ))
                )}
            </div>
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
        zIndex: '999',
    },
    close: {
        position: 'absolute',
        top: '3px',
        right: '10px',
        fontSize: '20px',
        cursor: 'pointer',
    },
    notificationContainer: {
        maxHeight: '300px',
        overflowY: 'auto',
        marginTop: '10px',
    },
};

export default NotificationModal;
