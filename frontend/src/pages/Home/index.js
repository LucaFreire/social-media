import './style.css';
import PostCard from "../../components/PostCard";
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = useCallback(async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_BACK_SERVER + 'post/getAll');
            setPosts(res.data);
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    });

    return (<>
        <div className='main-home'>
            <div className="post-section">
                <PostCard list={posts} />
            </div>
        </div>
    </>);

}

export default Home;