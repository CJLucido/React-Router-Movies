import React, { useState } from 'react';
import {Route} from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie"

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      
     

      <Route exact path="/" render={() => <MovieList/>}/>
      <Route path="/movies/:id" render={()=> <Movie/>}/>
    </div>
  );
};

export default App;

// <Route exact path="/" component={MovieList}></Route>
// <Route path="/movies/:id" component={Movie}></Route>