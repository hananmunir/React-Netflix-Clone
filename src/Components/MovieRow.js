import React, {useState, useEffect} from 'react'
import './MovieRow.css'
import axios from '../axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const BASE_URL = "https://image.tmdb.org/t/p/original"
function Row({title, fetchURL, isLarge, isWatching}) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("")
        }
        else{
            const name = movie?.title || movie?.name || movie?.original_name
           
            movieTrailer( name || "ironman")
            .then((url) => {
                const urlParam = new URLSearchParams(new URL(url).searchParams)
                
               setTrailerUrl(urlParam.get('v') ) ;
            })
            .catch((error) => console.log(error))
        }
    }
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL)
            if(!isWatching){
                setMovies(request.data.results);
            }
            else{
                setMovies(request.data.results.slice(4,7));
            }
            
            
            return request;
        }
        fetchData();
    }, [fetchURL])

    console.log(movies)
    const opts= {
        height: "450",
        width: "100%",
        playerVars:{
            autoPlay:1,
        },
    }

   
    return (
        <div className = "row">
            <h2>{title}</h2>
            <div className = "movies-row">
                {
                    movies.map((movie) => {
                        return(
                            <>
                                <img 
                                key= {movie.id}
                                onClick = {() => handleClick(movie)}
                                className = {`movie-poster ${isLarge && 'movie-poster-large'}`} 
                                src={ isLarge? BASE_URL + movie.poster_path : BASE_URL + movie.backdrop_path } 
                                alt= {movie.name} />
                            </>
                        )
                        
                    })
                }
            </div>
            {trailerUrl && <Youtube videoId = {trailerUrl} opts = {opts} /> }
            
            
        </div>
    )
}

export default Row
