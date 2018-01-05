import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <div>
        <div className="footer col-md-12">{this.props.text}</div>
      </div>
    );
  }
}

export default Footer; 