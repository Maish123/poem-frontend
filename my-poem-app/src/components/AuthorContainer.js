import React from "react"
import { Link } from "react-router-dom"

function AuthorContainer({poems}){
    const{author,content,imageUrl,title, id}=poems
    const poemId = poems.id

    return(
        <div>
            <h6>BY - {poems.author}</h6>
            <Link to={'/PoemDetail'+{poemId}}>More Info</Link>
        </div>
    )
}

export default AuthorContainer