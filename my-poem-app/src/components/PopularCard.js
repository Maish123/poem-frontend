import React from "react";

function PopularCard({favPoem}){
    return(
        <div className="fav-container">
            <h4>{favPoem.title}</h4>
            <p>{favPoem.content}</p>
            <h6>likes - {favPoem.likes}</h6>
        </div>
    )
}

export default PopularCard;