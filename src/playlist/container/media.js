import React, {Component} from 'react';
import Media from './../components/media';
import {connect} from 'react-redux';
import * as actions from './../../action/index';
import {bindActionCreators} from 'redux';


class MediaContainer extends Component{
    
    openModal = (id) => {
        // это action para el reducer modal
        //  this.props.dispatch({
        //      type: 'OPEN_MODAL',
        //      payload: {
        //          mediaId: id
        //      }
        //  });
        this.props.action.openModal(id) ;
    }

    render(){
        return <Media
                openModal={this.openModal} 
                {...this.props.data.toJS()}
                 />;
    }
};

function mapStateToProps(state, props){
    return {
        data: state.get('data').get('entities').get('media').get(props.id)
    }
}

function mapDispatchToProps(dispatch){
    return {
      action: bindActionCreators(actions, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);