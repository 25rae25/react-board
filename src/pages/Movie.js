import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getMovie } from "../movies_data";

const Movie = () => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const detail = searchParams.get("detail");

    const handleClick = () => {
        setSearchParams({detail : detail === "true" ? false : true});
        console.log(detail);
    }
    const movie = getMovie(parseInt(params.movieId));

    
    return (
        <div>
        <h2>{movie.title}</h2>
        <p> 감독 : {movie.director}</p>
        <p> 카테고리 : {movie.category} </p>
        <button type = "button" onClick = {handleClick}>자세히 보기</button>
        {detail === "true" ? <p>{movie.detail}</p> : " "}
    </div>
    );
};

export default Movie;