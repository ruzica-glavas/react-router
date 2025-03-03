import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePost = () =>{
    
    const {id} = useParams()

    const [post, setPost] = useState ({
        id: ``,
        title: ``,
        content: ``,
        image: ``,
        tags: []
    })

    useEffect (()=>{
        axios
        .get (`http://localhost:3000/posts/${id}`)
        .then ((res) => setPost(res.data))
        .catch (err => console.error(err));
    }, [id])
    return(
        <>
        ID prodotto : {id}
        Titolo: {post.title}

       <ul>
        {
           post.content.map( (element, id) => {
            return(
                <li key={id}> {element} </li>
            )
        }  )
        }
       </ul>
       
        
        </>
    )
}

export default SinglePost