import { ChangeProfile } from "../compChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
    const { username} = useContext(AppContext);
    return (
        <div>
            {" "}
            PROFILE, user is: {username}
            <ChangeProfile />
        </div>
    );
};