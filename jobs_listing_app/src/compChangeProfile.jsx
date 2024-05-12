import { useState } from "react"

export const ChangeProfile = (props) => {
    const [newProfile, setNewProfile] = useState("");
    return(
        <div>
        <input 
        onChange={(event) => {
            setNewProfile(event.target.value);
            }}
        />
    <button
    onClick={() => {
        props.setUserName(newProfile);
    }}
    > 
    Update Profile </button>
    </div>
    );
    
};