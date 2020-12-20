import React, { Component } from 'react';
import Search from '../components/search';
import {connect}  from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../action/index';

class SearchContainer extends Component {
  state = {
    value: 'L'
  }
 
  setInputRef = element => {
    this.input = element;
  }

  handleSubmit = event => {
    event.preventDefault();
  

    // когда мы вызываем диспатч срабывает reducer/data.js
    //  this.props.dispatch({
    //    type: 'SEARCH_ENTITIES',
    //    payload: {
    //      query: this.input.value
    //    }
    //  });

    // caso real: 
    // fetch('https://miapi/search/' + this.input.value ).then(() => {
    //   this.props.action.searchEntities(this.input.value);
    // })
    
    // this.props.action.searchEntities(this.input.value);
    this.props.action.searchAsyncEntities(this.input.value);
  }
 
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    });
    // когда мы вызываем диспатч срабывает reducer/data.js
   // this.props.dispatch({
   //   type: 'search_video',
   //   payload: {
   //     query: this.input.value
   //   }
   // });
  }

  render(){
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer);
