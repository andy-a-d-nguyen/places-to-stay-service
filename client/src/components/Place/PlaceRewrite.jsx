/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import mockData from '../../../../mockData.js';
import SlideContainerComponent from './Slide/SlideContainerComponent.jsx';

// .slideContainerWrapper li class="_1w7e1y2"
const SlideContainerListItem = styled.li`
  border-width: 0px 10px;
  max-width: 33.3333%;
  flex: 0 0 33.3333%;
  border-style: solid;
  border-color: transparent;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
  transform: translateX(-${props => props.translate * 400}px);
  transition: transform ease-out ${props => props.transition}s;
`;

class PlaceRewrite extends React.Component {

  constructor(props) {
    super(props); // gain the ability to use this.props in constructor
    const {translate, transition} = this.props;

    this.state = {
      place: this.props.place ? this.props.place : mockData[0].morePlacesID[0],
      translate: translate,
      transition: transition,
    };

    this.handleLike = this.handleLike.bind(this);
  }

  // a method to set liked to true and to be passed to Place component
  // takes in an event and an index
  handleLike(event) {
    const newState = Object.assign({}, this.state.place);
    newState.liked = !newState.liked;
    this.setState({
      place: newState
    });
  }

  render() {
    const {translate, transition} = this.props;
    return (
      <SlideContainerListItem
        translate={translate}
        transition={transition}
      >
        <SlideContainerComponent
          props={this.props}
          handleLike={this.handleLike}>
        </SlideContainerComponent>
      </SlideContainerListItem>
    )
  }
}

export default PlaceRewrite;