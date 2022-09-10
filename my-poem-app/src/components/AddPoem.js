import React, { useState } from "react";

function AddPoem({onAddPoem}){
    //set state for the different fields of the poem
    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    const[authorId,setAuthorId]=useState("");
    const[genreId,setGenreId]=useState("");
    const[likes,setLikes]=useState("");
    //defune the function for the onsubmit event

    function handlePoemSubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/poems",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                title,
                likes,
                content,
                authorId,
                genreId
            })
        })
        .then((resp)=>resp.json())
        .then((newPoem)=>onAddPoem(newPoem))
    }
    return(
        <div className="center">
            <form onSubmit={handlePoemSubmit}>
                <div className="txt-field">
                <input
                type="text" required
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}/>
                <label>Title</label>
                </div>

                <div className="txt-field">
                <input
                type="number" required 
                value={likes} 
                onChange={(e)=>setLikes(e.target.value)}/>
                <label>Likes</label>
                </div>


                <div className="txt-field">
                <input
                type="number" required 
                value={authorId} 
                onChange={(e)=>setAuthorId(e.target.value)}/>
                <label>Author-id</label>
                </div>

                <div className="txt-field">
                <input
                type="number" required 
                value={genreId} 
                onChange={(e)=>setGenreId(e.target.value)}/>
                <label>Genre-id</label>
                </div>

                <div className="txt-field">
                <textarea
                type="text" required 
                value={content} 
                onChange={(e)=>setContent(e.target.value)}/>
                <label>Content</label>
                </div>
                <input id="submit" type="submit" value="SHARE YOUR THOUGHTS"/>
            </form>
        </div>
    )
}

export default AddPoem;