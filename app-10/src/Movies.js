import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Movies = (props) => {
    
    const [movies, setMovies] = useState('')
    React.useEffect(() => {
        axios.get("https://imdb-api.com/en/API/Top250Movies/k_i466l60f").then((res) => {
          setMovies(res.data.items)
          console.log(res.data.items[1].image);
         
        })
      },[])
    

    return ( 
        <div className="Movies">
            <h1>Top Movies</h1>
            <div className="movies-list">
            {movies.length > 1 && movies.map((movie, index) => (
                <Link key={index} to={`/details/${movie.id}`}>
                  <img width="100" src={movie.image} />
                </Link>
            ))}
            </div>
        </div>
        
    )
}
 
export default Movies;