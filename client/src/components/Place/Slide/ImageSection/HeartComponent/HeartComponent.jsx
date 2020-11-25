/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

// imageWrapper2_top_right_heartWrapper button class="_1hqqufku"
const HeartContainer = styled.button`
  -webkit-box-pack: center;
  -webkit-box-align: center;
  cursor: pointer;
  position: relative;
  text-align: center;
  text-decoration: none;
  background: transparent;
  touch-action: manipulation;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 50%;
  outline: none;
  padding: 2px 0px 0px;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: rgb(34, 34, 34);
  margin: 0px;
  width: 32px;
  height: 32px;

`;

// .imageWrapper2_top_right_heart svg
const Heart = styled.svg`
  display: block;
  fill: rgba(0, 0, 0, 0.5);
  height: 24px;
  width: 24px;
  stroke: rgb(255, 255, 255);
  stroke-width: 2;
  overflow: visible;

`;

class HeartComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fill: false
    }

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(event) {
    event.preventDefault();
    this.setState({
      fill: !this.state.fill
    })
    // console.log('clicked');
  }

  render() {
    // console.log(this.props);
    // console.log(this.props.handleLike);
    const style = {
      fill: this.state.fill ? 'red' : 'none'
    }

    return (
      <HeartContainer
        type='button'
        onClick={this.props.handleLike}
      >
        <Heart
          onClick={this.changeColor}
          style={style}
        >
          <path
            d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
          >
          </path>
        </Heart>
      </HeartContainer>
    )
  }
}

export default HeartComponent;