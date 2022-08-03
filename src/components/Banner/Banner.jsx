
import React, { useEffect, useState } from 'react';
import categories, { getMovies } from '../../context/api';
import './Baneer.css'


function Banner() {
    const [movie , setMovie ] = useState()

 async function fetchRandom() {
        try {
            const netFlixOriginal = categories.find(category => category.name  === "netflixOriginals")
           const data = await getMovies(netFlixOriginal.path)
           const randonIndex = Math.floor(Math.random() * data.results.length)
           setMovie(data?.results[randonIndex])
        } catch  {
            console.log('erro', )
        }
    }

    useEffect(() => {
        fetchRandom()
    }, [])
 
    function Truncate(str, n) {
        return str?.length > n ? str.subtr(0, n - 1) + "..." : str;
    }
    
    
  return  (
    <header className='banner-container' style={{backgroundSize: "cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` ,
        roundPosition: "center-center",
        zIndex: 1 ,
        
    }}>

        <div className="banner-content">
            <h1 className="banner-title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner-button-container">
            <div className="banner-button">Play</div>
            <div className="banner-button">My List</div>
            </div>
            
            <div className="banner-description">

               <h1>{Truncate( movie?.overview, 150)}</h1>
            </div>

        </div>

    </header>
  )
}

export default Banner;