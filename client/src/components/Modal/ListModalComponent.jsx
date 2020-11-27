/* eslint-disable */
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import styled, {keyframes} from 'styled-components';
import ModalContainerComponent from './ModalContainerComponent.jsx';
import AddModalContainerComponent from './AddModalContainerComponent.jsx';

const Modal = styled.div`
  direction: ltr;
  unicode-bidi: isolate;
  display: ${props => props.showListModal ? 'block' : 'none'};
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
`;

const ModalTopAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.6;
  }
`;

const ModalTop = styled.div`
  background: rgb(34, 34, 34);
  z-index: 2000;
  position: fixed;
  inset: 0px;
  overflow-y: auto;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: ModalTopAnimation;
`;

class ListModalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showListModal: this.props.props,
      showAddModal: false,
      name: '',
      listNames: [],
    }

    this.closeModal = this.closeModal.bind(this);
    this.handleAddList = this.handleAddList.bind(this);
    this.closeAddModal = this.closeAddModal.bind(this);
    this.handleAddListInput = this.handleAddListInput.bind(this);
    this.handleCreateList = this.handleCreateList.bind(this);
    this.handleLikeList = this.handleLikeList.bind(this);
  }

  closeModal(event) {
    this.setState({
      showListModal: false,
    })
  }

  handleAddList(event) {
    this.setState({
      showAddModal: !this.state.showAddModal,
    })
  }

  handleAddListInput(value) {
    this.setState({
      name: value
    })
  }

  handleCreateList(event) {
    const {name, listNames} = this.state;
    const newList = [...listNames];
    if (this.state.name.length !== 0) {
      newList.push({
        listName: name,
        liked: true
      });
      this.setState({
        listNames: newList
      })
    }
  }

  handleLikeList(event, index) {
    const {listNames} = this.state;
    const newList = [...listNames];
    newList[index].liked = !newList[index].liked;
    this.setState({
      listNames: newList
    })
  }

  closeAddModal(event) {
    this.setState({
      showAddModal: false
    })
  }

  render () {
    const {showListModal, showAddModal, listNames} = this.state;
    return ReactDOM.createPortal(
      <Modal showListModal={showListModal}>
        <ModalTop>
        </ModalTop>
        <section className='modalBot'>
          {showListModal ?
            <ModalContainerComponent
              closeModal={this.closeModal}
              handleAddList={this.handleAddList}
              listNames={listNames}
              handleLikeList={this.handleLikeList}
            >
            </ModalContainerComponent>
          : null}
          {showAddModal ?
            <AddModalContainerComponent
              showAddModal={showAddModal}
              handleAddList={this.handleAddList}
              closeAddModal={this.closeAddModal}
              onInputChange={this.handleAddListInput}
              onInputSubmit={this.handleCreateList}
              name={this.state.name}
            >
            </AddModalContainerComponent>
          : null}
        </section>
      </Modal>,
      document.getElementById('service4')
    )
  }
};

export default ListModalComponent;