function AuthorCard({author}){
    const{name,age,poems}=author
    return(
        <div>
            <h4>{name}</h4>
        </div>
    )
}

export default AuthorCard;