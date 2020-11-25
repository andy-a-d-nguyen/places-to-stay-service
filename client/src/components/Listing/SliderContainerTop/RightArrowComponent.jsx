/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const RightArrow = styled.button`
  -webkit-box-pack: center;
  -webkit-box-align: center;
  appearance: none;
  display: inline-flex;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  outline: none;
  margin: 0px;
  padding: 0px;
  color: rgb(34, 34, 34);
  background-color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  touch-action: manipulation;
  align-items: center;
  justify-content: center;
  background-clip: padding-box;
  box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
  width: 32px;
  height: 32px;
  right: 25px;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(2px);
    &:focus {
      outline: 0;
    }
  }
`;

const RightArrowComponent = ({moveRight}) => {
  return (
    <div style={{marginLeft: '6px'}}>
      <RightArrow
        onClick={moveRight}
        type='button'
        aria-label="Next"
      >
        <span>
          <svg
            viewBox="0 0 18 18"
            style={{height: '10px',
                    width: '10px',
                    display: 'block',
                    fill: 'currentcolor',}}>
            <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z">
            </path>
          </svg>
        </span>
      </RightArrow>
    </div>
  )
}

export default RightArrowComponent;