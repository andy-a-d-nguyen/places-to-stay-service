/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import ListingRewrite from './components/Listing/ListingRewrite.jsx';

const App = () => {
  return (
    <React.Fragment>
      <img
        src='https://hrsf131-fec.s3-us-west-1.amazonaws.com/Google_Maps_screen.png'
        alt='Google Maps'
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <img
        src='https://hrsf131-fec.s3-us-west-1.amazonaws.com/Host_screen.png'
        alt='Host'
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <ListingRewrite />
      <img
        src='https://hrsf131-fec.s3-us-west-1.amazonaws.com/Bot_new_screen.png'
        alt='Bot'
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('service4'));
