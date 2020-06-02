import React from 'react';
import {
  Outlet
} from 'react-router-dom';

import Header from '../../components/Header';

function KnowMov() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default KnowMov;