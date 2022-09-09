import React from "react"
import { Link } from "react-router-dom"

function AuthorContainer({poems}){
    const{id, title, content, likes}=poems
    const poemId = poems.id

    return(
        <div>
            <h6>{poems.title}</h6>
            <Link to={'/PoemDetail'+{poemId}}>More Info</Link>
        </div>
    )
}

export default AuthorContainer