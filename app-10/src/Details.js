import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Details = (props) => {
    const [movie, setMovies] = useState('')
    React.useEffect(() => {
        axios.get(`https://imdb-api.com/en/API/Title/k_i466l60f/${props.match.params.id}`).then((res) => {
            setMovies(res.data)
            console.log(res.data);
        })
      },[])
    
    
    return ( 
        <div className="Details">
           <h1>{movie.title}</h1>
           <img width='300' src={movie.image} alt="" />
           <h2>{movie.year}</h2>
           <p>{movie.plot}</p>
           <Link className="home-link" to={'/'}>Back to home</Link>
        </div>
     );
}
 
export default Details;