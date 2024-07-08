import React from 'react'
import { baseURL } from '../../environment';
import { useState, useEffect } from 'react';

function useFriends() {

    const [friends, setFriends] = useState([]);

    const addFriend = async (friendId) => {

        const token = localStorage.getItem("token")
        const userId = localStorage.getItem("userId")

        const body = JSON.stringify({
            userId: userId,
            friendId: friendId
        })

        const url = `${baseURL}/user/${userId}/friends`;
        const options = {
            method: 'POST',
            body: body,
            headers: new Headers({
                Authorization: token,
                'Content-Type': 'application/json',
            }),
        };

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)

    }

    const deleteFriend = async (friendId) => {
        
        const token = localStorage.getItem("token")
        const userId = localStorage.getItem("userId")

        const body = JSON.stringify({
            userId: userId,
            friendId: friendId
        })

        const url = `${baseURL}/user/${userId}/friends/${friendId}`;
        const options = {
            method: 'DELETE',
            body: body,
            headers: new Headers({
                Authorization: token,
                'Content-Type': 'application/json',
            }),
        };

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)

    }

    const fetchFriends = async () => {

            const token = localStorage.getItem("token")
            const userId = localStorage.getItem("userId")

        const url = `${baseURL}/user/${userId}/friends`;
        const options = {
            method: 'GET',
            headers: new Headers({
                Authorization: token,
                'Content-Type': 'application/json',
            }),
        };

        try {
            const res = await fetch(url, options);
            if (!res.ok) {
                throw new Error('Failed to fetch friends');
            }
            const data = await res.json();
            setFriends(data);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        fetchFriends();
        console.log(friends);
    }, []);

    return {friends, fetchFriends, addFriend, deleteFriend}
}

export default useFriends