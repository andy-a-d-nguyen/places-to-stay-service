/* eslint-disable */
import React from 'react';
// import App from '../index.js'

const Place = ({place}) => {
  // console.log(place);
  return (
    <div>
      <img src = {place.pictureURL}></img>
      <span>
        {place.score}({place.reviewCount})
      </span>
      <span>
        {place.roomType}&middot;{place.bedCount}
      </span>
      <span>
        {place.roomName}
      </span>
      <span>
        ${place.costPerNight} / night
      </span>
    </div>
  )
};

export default Place;
