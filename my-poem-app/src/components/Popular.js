import React, { useEffect, useState } from "react";

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
        <div>
            <h1>This list shows the top 10 poems with most likes</h1>
        </div>
    )
}

export default Popular;