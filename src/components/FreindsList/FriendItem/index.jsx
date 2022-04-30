import "./styles.css";
import { MoreButton } from "./MoreButton";

export const FriendItem = ({ user: { name, mutualFriends, imgUrl } }) => {
    return (
        <li className="userItem">
            <MoreButton />
            <div className="userItem_img">
                <img src={imgUrl} alt={name} />
            </div>
            <div className="userItem_content">
                <p className="userItem_title">{name}</p>
                <p className="userItem_mutual">{mutualFriends} mutual friends</p>
            </div>
        </li>
    );
}