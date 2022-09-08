function AuthorCard({poems}){
    const{author,content,imageUrl,title, id}=poems
    return(
        <div>
            <h4>{title}</h4>
            <h6>By - {author}</h6>
            <p>{content}</p>
        </div>
    )
}

export default AuthorCard;