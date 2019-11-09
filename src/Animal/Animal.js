import React from 'react';

class Animal extends React.Component {

  render(props){
    return(
      <div>
        <p> Name: {this.props.name}, Age: {this.props.age} </p>
        <input type='text' onChange={this.props.changed} value={this.props.name}></input>
      </div>
    );
  }
}

export default Animal;