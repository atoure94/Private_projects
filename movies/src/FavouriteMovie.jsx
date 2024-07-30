function FavouriteMovie({movie, removeFavourites}){

    const handleRemove=(e)=>{
        e.stopPropagation()
        removeFavourites(movie)
    }
    return(
        <li>
            <img src={movie.Poster} alt={movie.Title}/>
            <div>
                <h4>{movie.Title}</h4>
                <p>{movie.Year}</p>
            </div>

            <button onClick={handleRemove}>
                remove Movie
            </button>
        </li>
    )
}

export default FavouriteMovie