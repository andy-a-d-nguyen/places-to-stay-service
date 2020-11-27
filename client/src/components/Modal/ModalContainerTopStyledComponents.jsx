/* eslint-disable */
import React, { Component } from "react";
import styled, {keyframes} from 'styled-components';

const ModalContainerTopHeader = styled.header`
  min-height: 64px;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(235, 235, 235);
  padding: 0px 24px;
  color: rgb(34, 34, 34);
  font-size: 16px;
  line-height: 20px;
  font-weight: 800;
`;

const ModalContainerTopLeftDiv = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 16px;
  text-align: left;
`;

const ModalContainerTopMidDiv = styled.div`
  -webkit-box-flex: 0;
  overflow: hidden;
  flex: 0 1 auto;
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
`;

const ModalContainerTopMidH1 = styled.h1`
  color: inherit;
  font-size: 1em;
  font-weight: inherit;
  line-height: inherit;
  margin: 0px;
  padding: 0px;
`;

const ModalContainerTopMidH1InnerDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ModalContainerTopRightDiv = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 16px;
  text-align: right;
`;

export {
  ModalContainerTopHeader,
  ModalContainerTopLeftDiv,
  ModalContainerTopMidDiv,
  ModalContainerTopMidH1,
  ModalContainerTopMidH1InnerDiv,
  ModalContainerTopRightDiv,
}