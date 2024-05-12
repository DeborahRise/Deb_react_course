import { useContext } from "react";
import { AppContext } from "../App";
export const Home = () => {
    const {username} = useContext(AppContext);
    return (
        <div>
           <h1> { username }'s Home Page </h1> 
        </div>
    ); 
};