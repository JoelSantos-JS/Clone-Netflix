import React, { useState , useEffect} from 'react';
import { getMovies } from '../../context/api'
import './Row.css'

const imageHost = "https://image.tmdb.org/t/p/original/"

function Row({title , path , isLarge}) {
    const [movies , setMovies] =  useState([])

    const fechtMovies = async (_path) => {
      try {
        const data = await getMovies(_path)

        setMovies(data?.results)


      } catch (error) {
        console.log('erro ' , error)
      }
    }

    useEffect(() => {
      
      fechtMovies(path)
     
    }, [path])
    

  return  (
        <div className='row-container'>
          <h2 className='row-header'>{title}</h2>
          <div className='row-cards'>{
            movies.map((movie, index) => {

                return (
                  <img className={`movie-card ${isLarge && "movie-card-large" }`} key={movie.id} src={`${imageHost}${movie.poster_path}`}></img>
                )
              
            }

            )
          }</div>
        
        </div>
  )
}

export default Row