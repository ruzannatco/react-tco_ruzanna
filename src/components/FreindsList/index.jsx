import "./styles.css";
import {USERS_DAMI_LIST} from "../../static";
import {FriendItem} from "./FriendItem";

export const FreindsList = () => {
    const usersJsx = USERS_DAMI_LIST.map((user) => {
        return <FriendItem key={user.id} user={user}/>
    });
    return (
        <ul className='friendsList'>
            {usersJsx}
        </ul>
    );
}