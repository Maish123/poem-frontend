import React from "react"

function AuthorContainer({poems}){
    const{author,content,imageUrl,title, id}=poems
    return(
        <div>
            <h6>BY - {poems.author}</h6>
            <button>more info</button>
        </div>
    )
}

export default AuthorContainer