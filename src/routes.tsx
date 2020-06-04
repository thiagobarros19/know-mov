import React from 'react';
import { BrowserRouter, Routes as Rts, Route } from "react-router-dom";

import KnowMov from './pages/KnowMov';
import HomePage from './pages/KnowMov/HomePage';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/KnowMov/Movies';
import TvShows from './pages/KnowMov/TvShows';

function Routes() {
  return(
    <BrowserRouter>
      <Rts>
        <Route path="/"  element={<KnowMov/>}>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/movies"  element={<Movies/>} />
          <Route path="/tvshows"  element={<TvShows/>} />
        </Route>
        <Route path="/detail/:media_type/:id" element={<MovieDetail/>} />
      </Rts>
    </BrowserRouter>
  )
}

export default Routes;