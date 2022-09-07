import React from "react"

function AuthorContainer({poems}){
    const{category, data}=poems
    return(
        <div>
            <h6>BY - {data.author}</h6>
        </div>
    )
}

export default AuthorContainer