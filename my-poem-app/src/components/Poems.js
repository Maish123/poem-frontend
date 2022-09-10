import React, { useState } from "react";
import AddPoem from "./AddPoem";
function Poems({poems,onAddPoem, onDeletePoem}){
  
    //function for handling the number of likes

    //function for handling delete operation
    function handlePoemDelete(){
      console.log("i have been clicked")
      fetch(`http://localhost:9292/poems/${poems.id}`,{
        method: "DELETE",
      })
      .then((resp)=>resp.json())
      .then((deletedPoem)=>onDeletePoem(deletedPoem))
    }
    return (
        <div className="container-1">
        <div className="box-1">
          <AddPoem onAddPoem={onAddPoem}/>
        </div>
        <div className="box-2">
          {poems.map((poem)=>{
            return(
              <div key={poem.id} className="poem-container">
                <h4>{poem.title}</h4>
                <p>{poem.content}</p>
                <div>
                  <button onClick={handlePoemDelete}>DELETE</button>
                  <button>LIKES - {poem.likes}</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default Poems;


{/* {poemItems.map((poemItem)=>{
  return(
  <AuthorContainer
  key={poemItem.id}
  poems={poemItem}/>
   )
})} */}

// import React from "react"
// import { Link } from "react-router-dom"

// function AuthorContainer({poems}){
//     const{id, title, content, likes}=poems
//     const poemId = poems.id

//     return(
//         <div>
//             <h6>{poems.title}</h6>
//             <Link to={'/PoemDetail'+{poemId}}>More Info</Link>
//         </div>
//     )
// }

// export default AuthorContainer
