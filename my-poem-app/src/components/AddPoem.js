import React from "react";

function AddPoem(){
    return(
        <div>
            <form>
                <label>POEM NAME</label>
                <input
                type="text"
                placeholder="input poem title"/>
                <label>POEM CONTENT</label>
                <input
                type="text"
                placeholder="input poem content"/>
                <input id="submit" type="submit" value="SHARE YOUR THOUGHTS"/>
            </form>
        </div>
    )
}

export default AddPoem;