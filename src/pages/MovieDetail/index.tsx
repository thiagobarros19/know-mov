import React from 'react';

import { useParams} from "react-router-dom";
import Header from '../../components/Header';
import Detail from '../../components/Detail';

function MovieDetail() {
  
  const { id, media_type } = useParams();
  
  return (
    <>
      <Header />
      <Detail movieId={id} media_type={media_type} />
    </>
  );
}

export default MovieDetail;