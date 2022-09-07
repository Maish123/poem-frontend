import AuthorContainer from "./AuthorContainer";

function Poems({poemItems}){
    return (
        <div className="container-1">
        <div className="box-1">
        {/* {poemItems.map((poemItem)=>{
          return(
            <AuthorContainer
            key={poemItem.id}
            poems={poemItem}/>
          )
        })} */}
        </div>
        <div className="box-2">
        </div>
      </div>
    )
}

export default Poems;
