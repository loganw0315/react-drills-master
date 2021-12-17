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
           {/* {movies.length>1 && 
        //    <h1>{movies[props.match.params.id].title}</h1>
           } */}
        </div>
     );
}
 
export default Details;