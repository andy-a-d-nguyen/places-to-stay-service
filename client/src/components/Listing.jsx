/* eslint-disable */
import React from 'react';
import Place from './Place.jsx';
const axios = require('axios');

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
    }

    this.getListing = this.getListing.bind(this);
  }

  // get data from db on page load
  componentDidMount() {
    window.addEventListener('load', this.getListing);
  }

  getListing() {
    axios.get('/api/rooms/12')
    .then((res) => {
      console.log(res);
      this.setState({ // this triggers a re-render
        listing: res.data[0],
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const places = this.state.listing.morePlacesID;
    console.log(places);
    // If there is nothing in this.state (because API call has not gone through),
    // do not render
    if (!places) {
      return null;
    }
    return (
      <div>
        {places.map((place, key) => {
          return (
            // <div key = {place.listingID}>{place.pictureURL}</div>
            <Place
              key = {place.listingID}
              place = {place}
            />
          )
        })}
      </div>
    )
  }
}

export default Listing;