import { useState } from 'react';
import './style.css'


function PostCard({ list }) {

    const [isLiked, setIsLiked] = useState(false)

    const likePost = () => {
        setIsLiked(!isLiked)
    }

    return list.map((post) => {
        return (
            <div className='container-card-box flex-center'>

                <h5 id='post-card-title'>{post.title}</h5>

                <div className='card-post-content'>
                    {post.content}
                </div>

                <div className='footer-post-card'>
                    <i class={
                        isLiked ?
                        "ri-heart-3-fill icon-size" :
                        "ri-heart-3-line icon-size"
                    } onClick={() => likePost()}></i>
                    {post.likes.length - 1}

                </div>
                <br />
            </div>
        )
    });

}

export default PostCard;