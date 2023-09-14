import { useState } from 'react';
import './style.css'


function PostCard() {

    const [isLiked, setIsLiked] = useState(false)

    const likePost = () => {
        setIsLiked(!isLiked)
    }

    return (
    <>
        <div className='container-card-box flex-center'>

            <h5 id='post-card-title'>Title</h5>

            <div className='card-post-content'>
                dkflksdnfkdsfsdlkfnlksdnf lsdkjflsdjflsdkflksdnfkdsfsdlkfnlksdnf lsdkjflsdjflsdkflksdnfkdsfsdlkfnlksdnf lsdkjflsdjf
            </div>

            <div className='footer-post-card'>
                <i class={
                    isLiked ? 
                    "ri-heart-3-fill tam" :
                    "ri-heart-3-line tam"
                } onClick={ () => likePost()}></i>
            </div>

        </div>
    </>)
}

export default PostCard;