import AuthorContainer from "./AuthorContainer";
import PoemDetail from "./PoemDetail";

function Poems({poemItems}){
    return (
        <div className="container-1">
        <div className="box-1">
        {poemItems.map((poemItem)=>{
          return(
            <AuthorContainer
            key={poemItem.id}
            poems={poemItem}/>
          )
        })}
        </div>
        <div className="box-2">
          {poemItems.map((poemItem)=>{
            return(
              <PoemDetail
              key={poemItem.id}
              poems={poemItem}/>
            )
          })}
        </div>
      </div>
    )
}

export default Poems;
