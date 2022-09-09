import AuthorContainer from "./AuthorContainer";
import PoemDetail from "./PoemDetail";

function Poems({poems}){
  const{id, title, content, likes}=poems
    return (
        <div className="container-1">
        <div className="box-1">

        </div>
        <div className="box-2">
          {poems.map((poem)=>{
            return(
              <div>
                <h4>{poem.title}</h4>
                <p>{poem.content}</p>
                <div></div>
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
