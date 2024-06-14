import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect } from 'react';
import { baseURL } from '../../environment';

const LikeFunction = ({ postId, userId, token }) => {

    const [likeCount, setLikeCount] = useState(0); 
    const likedStyle = { color: 'red' };
    const unLikedStyle = { color: 'gray' };
    const [liked, setLiked] = useState(false);

    // setLiked(!liked);

    const fetchLikeStatus = async () => {
        const url = `${baseURL}/post/status`;

        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token,
            }),
            body: JSON.stringify({ postId, userId }),
        };

        try {
            const res = await fetch(url, options);
            if (res.ok) {
                const data = await res.json();
                console.log('Like status fetched:', data);
            } else {
                console.error('Failed to fetch like status');
            }
        } catch (err) {
            console.error('Error fetching like status:', err.message);
        }
    };

    // Fetch the initial like status and count from the serve
    useEffect(() => {
        fetchLikeStatus();
    }, [/* postId, userId, */ token]);



    async function likePost() {

        setLiked(!liked);

      
        console.log(likeCount);
        let newLike = likeCount + 1
        setLikeCount(newLike);


        const url = `${baseURL}/post/${postId}/like` ;

        const options = {
            method: 'PATCH',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token,
            }),
            body: JSON.stringify({ 
                likes: likeCount,
            }),
        };
        
        try {
            const res = await fetch(url, options);
            const data = await res.json();
            console.log(data)
        
        } catch (err) {
            console.error('Error liking:', err.message);
        }
    };

    return (
        <button onClick={likePost} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <FavoriteIcon sx={liked ? likedStyle : unLikedStyle} />
            <span>{likeCount}</span>
        </button>
    );
};

export default LikeFunction;