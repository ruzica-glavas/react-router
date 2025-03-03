import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePost = () =>{
    
    const {id} = useParams()
    return(
        <>
        ID prodotto : {id}
        </>
    )
}

export default SinglePost