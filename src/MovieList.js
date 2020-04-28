import React,{useState} from 'react';
import Movie from './Movie';
const MovieList=() =>
{
    const [movies,setMovies]=useState([
        {
        name:'Rio de Janerio',
        price:'10',
        id:1
        }
    ]);
    return( 
        <div>{movies.map(movie =>(
        <Movie name={movie.name} price={movie.price} key={movie.id}/>))}</div>
        );
};
export default MovieList;