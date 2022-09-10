import React from "react";
import AddPoem from "./AddPoem";
import PoemCard from "./PoemCard";
function Poems({poems,onAddPoem, onDeletePoem}){
  
    return (
        <div className="container-1">
        <div className="box-1">
          <AddPoem onAddPoem={onAddPoem}/>
        </div>
        <div className="box-2">
          {poems.map((poem)=>{
            return(
              <PoemCard
              key={poem.id}
              poem={poem}
              onDeletePoem={onDeletePoem}/>
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
