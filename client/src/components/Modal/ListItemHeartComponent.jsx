/* eslint-disable */
import React, { Component } from "react";
import styled, {keyframes} from 'styled-components';

const HeartContainerWrapper = styled.div`
  flex: 0 1 0%;
`;

const HeartContainerSVG = styled.svg`
  height: 24px;
  width: 24px;
  display: block;
  overflow: visible;
  fill: ${props => props.liked ?  'none' : 'rgb(255, 56, 92)'};
  fill-opacity: ${props => props.liked ? 0 : 1};
  stroke: ${props => props.liked ?  'rgb(34, 34, 34)' : 'rgb(255, 56, 92)'};
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

class ListItemHeartComponent extends Component {
  constructor(props) {
    super(props);

    const {liked} = this.props.listName;
    this.state = {
      liked: true,
    }

    this.handleClick = this.handleClick.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    this.setState({
      liked: false,
    });
  }

  handleClick(event) {
    const {index, handleLikeList} = this.props;
    handleLikeList(event, index);
  }

  changeState(event) {
    this.setState({
      liked: !this.state.liked,
    })
  }

  render() {
    return (
      <HeartContainerWrapper
        onClick={this.changeState}
      >
        <HeartContainerSVG
          viewBox="0 0 24 24"
          onClick={this.handleClick}
          liked={this.state.liked}
        >
          <path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin='round'>
          </path>
        </HeartContainerSVG>
      </HeartContainerWrapper>
    )
  }
}

export default ListItemHeartComponent;