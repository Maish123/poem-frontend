import React from "react";
import AuthorCard from "./AuthorCard";

function Authors({poemItems}){
    console.log(poemItems)
    return(
        <div className="container-2">
                {poemItems.map((poemItem)=>{
                    return(
                        <AuthorCard
                        key={poemItem.id}
                        poems={poemItem}/>
                    )
                })}
        </div>
    )
}

export default Authors;