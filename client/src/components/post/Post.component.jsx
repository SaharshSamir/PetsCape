import "./post.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

const Post = ({post}) => {
    const [isLiked, setIsLiked] = useState(false);
    console.log(post.photo);
    const toggleIsLiked = () => {
        setIsLiked(!isLiked);
        console.log(isLiked);
    }
    return (
        <div className="post-container">
            <div className="author-container">
                <div className="dp-container">
                    <div className="display-pic"></div>
                </div>
                <div className="info-container">
                    <div className="username">Johnathan Doe</div>
                    <div className="caption">Cooking lessons with Bean heart❤️. Today, we’re making.... treats</div>
                </div>
            </div>
            <div className="image-container">
                <img src={post.photo} alt="dog pic"/>
            </div>
            <div className="likes-container">
                {/* <FavoriteIcon onClick={() => toggleIsLiked} cursor="pointer" style={{color: "#DD5555"}} fontSize="large"/> */}
                {
                    isLiked? <FavoriteIcon onClick={toggleIsLiked} cursor="pointer" style={{color: "#DD5555"}} fontSize="large"/>
                    : 
                    <FavoriteBorderIcon onClick={toggleIsLiked} cursor="pointer" color="#4B4B4B" fontSize="large"/>
                }
                    
                <p id="like-count">{post.likes}</p>
                <p>Likes</p>
            </div>
        </div>
    )
}

export default Post;