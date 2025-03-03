import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePost = () =>{
    
    const {id} = useParams()

    const [post, setPost] = useState ({})

    useEffect (()=>{
        axios
        .get (`http://localhost:3000/posts/${id}`)
        .then ((res) => setPost(res.data))
        .catch (err => console.error(err));
    }, [id]);

    return(
        <>
        <h1>Descrizione prodotto</h1>
        Titolo: {post.content}

       
       
        
        </>
    )
}

export default SinglePost