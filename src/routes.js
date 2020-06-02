import React from 'react';
import { BrowserRouter, Routes as Rts, Route } from "react-router-dom";

import KnowMov from './pages/KnowMov';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';
// import Movies from './pages/Movies';
// import Actors from './pages/Actors';
// import TvShows from './pages/TvShows';

function Routes() {
  return(
    <BrowserRouter>
      <Rts>
        <Route path="/"  element={<KnowMov/>}>
          <Route path="/"  element={<HomePage/>} />
        </Route>
        <Route path="/detail/:id" element={<MovieDetail/>} />
      </Rts>
    </BrowserRouter>
  )
}

export default Routes;