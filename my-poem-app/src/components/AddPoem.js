import React from "react";

function AddPoem(){
    return(
        <div className="center">
            <form>
                <div className="txt-field">
                <input
                type="text" required />
                <label>Title</label>
                </div>

                <div className="txt-field">
                <textarea
                type="text" required />
                <label>Content</label>
                </div>

                <div className="txt-field">
                <input
                type="number" required />
                <label>Likes</label>
                </div>

                <div className="txt-field">
                <input
                type="number" required />
                <label>Author-id</label>
                </div>

                <div className="txt-field">
                <input
                type="number" required />
                <label>Genre-id</label>
                </div>
                <input id="submit" type="submit" value="SHARE YOUR THOUGHTS"/>
            </form>
        </div>
    )
}

export default AddPoem;