import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  let id = useState([]);
    id = Number(props.match.params.id);
 
  useEffect(() => {
    
    
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    //The linter is telling you that you're depending on external values that may change, when you set the dependencies as an empty array the effect will run just once when the component mounts.

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
 
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}


export default Movie;


//fixed the map here by removing the curly braces