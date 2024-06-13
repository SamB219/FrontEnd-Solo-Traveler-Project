import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect } from 'react';

const LikeFunction = () => {
    const likedStyle = { color: 'red' };
    const unLikedStyle = { color: 'gray' };

    const [liked, setLiked] = useState(false);

//     useEffect(() => {
//         const savedLiked = localStorage.getItem('liked') === 'true';
//         setLiked(savedLiked);
// }, []);

    const toggleStyle = () => {
        setLiked(!liked);
    };

    return (
        <button onClick={toggleStyle} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <FavoriteIcon sx={liked ? likedStyle : unLikedStyle} />
        </button>
    );
};

export default LikeFunction;
