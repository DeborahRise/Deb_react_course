import { React, useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Spinner from '../components/Spinner';

const ViewProfile = () => {
    const [tech_profile, setTech_Profile] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetch_data = async () => {
            try {
                const res = await fetch(`/api/tech_user/${id}`)
            const data = await res.json();
            setTech_Profile(data);
            } catch (error) {
                console.log('error is', error);
            } finally {
                setLoading(false)
            }
            
        }; 
        fetch_data();
    }, [id])
    
  return ( loading ? ( <Spinner />) : ( <h1> {tech_profile.location} </h1>)
  )
}

export default ViewProfile;