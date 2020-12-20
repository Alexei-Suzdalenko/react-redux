import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import {connect} from 'react-redux';
import {List as list} from 'immutable';
import * as actions from './../../action/index';
import {bindActionCreators} from 'redux';


class Home extends Component {
   //  state = {
   //    modalVisible: false,
   //  }
  handleOpenModal = (id) => {
    //  this.setState({
    //    modalVisible: true,
    //    media
    //  })
         // this.props.dispatch({
           //  type: 'OPEN_MODAL',
           //  payload:{
           //    mediaId: id
           //  }
         // });
    this.props.actions.openModal(id);
  }
  handleCloseModal = (event) => {
     //  this.setState({
     //    modalVisible: false,
     //  })
     //       this.props.dispatch({
     //         type: 'CLOSE_MODAL'
     //       });
     this.props.actions.closeModal();
  }
  render() {
  
    return (
      <HandleError> 
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
            jui={this.props.jui}

            isLoading={this.props.isLoading}
          /> 
          {
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay 
                  id={this.props.modal.get('mediaId')}
                 // src={this.state.media.src}
                 // title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout> 
      </HandleError>
    )
  }
}

function mapStateToProps(state, props){

 // let categories = state.data.categories.map((miId) => {
 //   return state.data.entities.categories[miId];

  let categories = state.get('data').get('categories').map((miId) => {
    return state.get('data').get('entities').get('categories').get(miId);
  });

  let searchResult = list();
  const search = state.get('data').get('search');
  if(search){
    const mediaList = state.get('data').get('entities').get('media');
    searchResult = mediaList.filter((item) => {
      return item.get('author').toLowerCase().includes(search.toLowerCase())
    }).toList() ;
  }

  // то что я возвращаю это функцией, я записываю в props класса Home

  console.log(state.toJS());

  return {
    categories: categories,
    jui: state.get('jui'),
    search: searchResult,
    modal: state.get('modal'),
    isLoading: state.get('isLoading').get('active')
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
