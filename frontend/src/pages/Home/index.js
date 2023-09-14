import './style.css';
import PostCard from "../../components/PostCard";

function Home() {
    return (<>
        <div className='main-home'>
            <div className="post-section">
                <PostCard />
                <PostCard />
            </div>
        </div>
    </>)
}

export default Home;