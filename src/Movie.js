import React,{useState} from "react";
import MovieList from "./MovieList";
const Movie =({name,price})=>{
    return(
        <div>
            <h3>{name}</h3>
            <h2>{price}</h2>
        </div>
    );
};
export default Movie;