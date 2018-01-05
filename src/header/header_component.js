import React, { Component } from 'react';
import appConst from './../appConstants.js'

const noFloat ={
  float: 'none'
}

class Header extends Component{
  render(){
    return(
      <div>
      	<header className="header"><img src={appConst.logoTransparent} alt="logo" height="40"/></header>
      	<h3 className="col-md-12" style={noFloat}>{this.props.name}</h3>
      </div>
    );
  }
}

export default Header;