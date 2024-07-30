import FavouriteMovie from "./FavouriteMovie";

function FavouritesList(props){
    return (
        <div>
            <h3>
                My favourites Movies
            </h3>
            {props.favourites.length < 0 ? (
                <ul>
                    {
                        props.favourites.map(movie=>(
                            <FavouriteMovie movie={movie} removeFavourites={props.removeFavourites}/>
                        ))
                    }
                </ul>
            ):(
                <p>You have no favourite movie yet</p>
            )}

        </div>
    );

}

export default FavouritesList