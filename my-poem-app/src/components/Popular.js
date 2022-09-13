import React, { useEffect, useState } from "react";
import PopularCard from "./PopularCard";

function Popular(){
    const[favPoems, setFavPoems]= useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/favourites")
        .then((resp)=>resp.json())
        .then((favPoems)=>{
            setFavPoems(favPoems)
        })
    },[]);
    return (
        <div className="pop-container">
            {favPoems.map((favPoem)=>{
                return(
                    <PopularCard
                    key={favPoem.id}
                    favPoem = {favPoem}/>
                )
            })}
        </div>
    )
}

export default Popular;