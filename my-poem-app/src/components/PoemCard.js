import React from "react";

function PoemCard({poem,onDeletePoem}){
    //function for handling delete operation
    function handlePoemDelete(){
        console.log("i have been clicked")
        fetch(`http://localhost:9292/poems/${poem.id}`,{
            method: "DELETE",
            })
        .then((resp)=>resp.json())
        .then((deletedPoem)=>onDeletePoem(deletedPoem))
     }
    return(
        <div key={poem.id} className="poem-container">
            <h4>{poem.title}</h4>
            <p>{poem.content}</p>
            <div>
                <button className="btn" onClick={handlePoemDelete}>DELETE</button>
                <button className="btn">LIKES - {poem.likes}</button>
            </div>
         </div>
    )
}

export default  PoemCard;