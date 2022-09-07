function PoemDetail({poems}){
    const{author,content,imageUrl,title, id} = poems
    return(
        <div>
            <h6>{poems.title}</h6>
            <p>{poems.content}</p>
        </div>
    )
}

export default PoemDetail;