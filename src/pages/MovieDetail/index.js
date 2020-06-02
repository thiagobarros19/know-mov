import React from 'react';

import { useParams} from "react-router-dom";
import Header from '../../components/Header';
import Detail from '../../components/Detail';

function MovieDetail() {
  
  const { id } = useParams();

  return (
    <>
      <Header />
      <Detail movieId={id} />
    </>
  );
}

export default MovieDetail;