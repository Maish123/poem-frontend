import React, { useEffect, useState } from "react";
import AuthorCard from "./AuthorCard";
    function Authors(){
        const[authors, setAuthors] = useState([])

        useEffect(()=>{
            fetch("http://localhost:9292/authors")
            .then((resp)=>resp.json())
            .then((authors)=>{
                console.log(authors)
                setAuthors(authors)
            })
        },[]);

        return(
            <div className="container-2">
                {authors.map((author)=>(
                    <AuthorCard
                    key={author.id}
                    author={author}/>
                ))}
            </div>
        )
    }

    export default Authors;