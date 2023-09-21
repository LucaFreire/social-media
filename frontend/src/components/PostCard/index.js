import { useCallback, useState } from 'react';
import './style.css'
import axios from 'axios';

function PostCard({ list }) {

    const jwt = sessionStorage.getItem('token');

    const handleLike = useCallback(async (postId) => {
        try {
            const res = await axios.post(process.env.REACT_APP_BACK_SERVER + "post/like", { postId, jwt });
            console.log(res);
            window.location.reload(false);
        } catch (error) {
            console.log(error);
        }
    });

    const isLiked = useCallback(async (postId) => {
        console.log(postId);
        try {
            const isLikedData = await axios.post(process.env.REACT_APP_BACK_SERVER + 'post/isLiked', { jwt, postId }).data
            return isLikedData.value;
        } catch (error) {
            console.log(error);
        }

    })


    return list.map((post) => {
        
        console.log('aquii', typeof(post));
        return (
            <div className='container-card-box flex-center'>

                <h5 id='post-card-title'>{post.title}</h5>

                <div className='card-post-content'>
                    {post.content}
                </div>

                <div className='footer-post-card'>
                    <i class={
                        isLiked(post._id) ?
                            "ri-heart-3-fill icon-size" :
                            "ri-heart-3-line icon-size"
                    } onClick={() => handleLike(post._id)}></i>
                    {post.likes.length - 1}
                </div>
                <br />
            </div>
        )
    });
}

export default PostCard;