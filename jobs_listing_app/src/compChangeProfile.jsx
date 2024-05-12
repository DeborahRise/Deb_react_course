import { useState } from "react"
import { useContext } from "react";
import { AppContext } from "./App";

export const ChangeProfile = () => {
    const { setUserName} = useContext(AppContext);
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
        setUserName(newProfile);
    }}
    > 
    Update Profile </button>
    </div>
    );
    
};