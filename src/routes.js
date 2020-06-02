import React from 'react';
import { BrowserRouter, Routes as Rts, Route } from "react-router-dom";

import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function Routes() {
  return(
    <BrowserRouter>
      <Rts>
        <Route path="/"  element={<Home/>} />
        <Route path="/detail/:id" element={<MovieDetail/>} />
      </Rts>
    </BrowserRouter>
  )
}

export default Routes;