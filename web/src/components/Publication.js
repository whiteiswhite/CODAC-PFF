import React, {useState, useContext, useEffect} from 'react'
import PublicationItem from './PublicationItem';
import PublicationService from '../Services/PublicationService';
import { AuthContext } from "../Context/AuthContext";


const Publications = props =>{
    const [publication, setPublication] = useState({name : ""});
    const [publications, setPublications] = useState([]);
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        PublicationService.getPublications().then(data =>{
            setPublication(data.publications);
        })
    },[]);

    return(
        <div>
            <ul className={"list-group"}>
                {
                    publications.map(publication =>{
                        return <PublicationItem key={publication_id} publication={publication}/>
                    })
                }
            </ul>
        </div>
    )

};

export default Publications
