import React from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import '/src/css/trailer.css';


const Trailer = () => {

    let params=useParams();
    let key=params.ytTrailerId;

  return (
    <div className='react-player-container'>
     {(key!=null)?
     <ReactPlayer
      url={`https://www.youtube.com/watch?v=${key}`}
      controls={true}
      width='100%'
      height='100%'/>
      :null}      
    </div>
  )
}

export default Trailer
