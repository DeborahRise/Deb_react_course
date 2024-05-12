import { ChangeProfile } from "../compChangeProfile";
export const Profile = (props) => {
    return (
        <div>
            {" "}
            PROFILE, user is: {props.username}
            <ChangeProfile setUserName = {props.setUserName}/>
        </div>
    );
};