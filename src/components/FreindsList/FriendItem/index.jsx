import "./styles.css";
import {MoreButton} from "./MoreButton";

export const FriendItem = ({user}) => {
    return (
        <li className="userItem">
            <MoreButton/>
            <div className="userItem_img">
                <img src={user.imgUrl} alt={user.name}/>
            </div>
            <div className="userItem_content">
                <p className="userItem_title">{user.name}</p>
                <p className="userItem_mutual">{user.mutualFriends} mutual friends</p>
            </div>
        </li>
    );
}