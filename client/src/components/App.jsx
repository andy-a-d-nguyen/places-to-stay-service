/* eslint-disable */
import React from 'react';
const axios = require('axios');

class Places extends React.Component {
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
      this.setState({
        listing: res.data,
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default Places;