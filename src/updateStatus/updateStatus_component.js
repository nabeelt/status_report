import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import {withRouter} from "react-router-dom";

const classStyle = {
  padding: '10px',
  background: 'green'
}
const displayNone= {
  display: 'none'
}

const borderRight ={
  borderRight: '1px solid #ddd'
}
class UpdatedStatus extends Component{
  constructor(){
      super();
      this.state = {
        showModal: false,
        statusVal: '',
        id: ''
      }
       this.handleDelete = this.handleDelete.bind(this);
       this.openModal = this.openModal.bind(this);
       this.closeModal = this.closeModal.bind(this);
       this.handleOnchange = this.handleOnchange.bind(this);
       this.saveStatus = this.saveStatus.bind(this);
       this.populateDetails = this.populateDetails.bind(this);
    }

handleDelete(id){
    this.props.deleteFn(id);
}

openModal (value,id1){
  this.setState({showModal: true})
  this.setState({statusVal: value})
  this.setState({id: id1})

}
closeModal (){
  this.setState({showModal: false})
}
handleOnchange(e){
  this.setState({statusVal: e.target.value})
}

saveStatus(){
  this.props.editFn(this.state.statusVal,this.state.id);
  this.state.showModal = false;
}

populateDetails(id) {
  this.props.history.push('/Details/'+id);
}

render(){
    return( 
     <div className="col-md-12 history-container"> 
       <h2> History </h2>
       <Modal isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
        <div className="form-group">
            <label className="col-md-12 padding0">Status:</label>
            <textarea rows="6" value ={this.state.statusVal} onChange={this.handleOnchange} className="form-control"></textarea>
        </div>
        <button className="close close-btn" onClick={this.closeModal}>x</button>
        <button className="btn btn-primary marginTop10" onClick={this.saveStatus}>Save</button>
      </Modal>

      {this.props.data.map((each,index) =>
      <div className="col-md-6" onClick={()=>this.populateDetails(each.id)}>
        <div className="col-md-12 status-wrapper" key={index} style={{ ...classStyle, background: '#f2f2f2' }}>
          <span className="col-md-6">{each.status}</span>
          <span className="col-md-3">{each.date}</span>
          <span className="col-md-2" >
            <span className="glyphicon" onClick={()=>this.openModal(each.status,each.id)}>&#x270f;</span>
          </span>
          <span className="col-md-1" onClick={() => this.handleDelete(each.id)}><button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button></span>
        </div>
      </div>
        )
      }
    </div>
      
    );
  }
}

UpdatedStatus.propTypes ={
  deleteFn: PropTypes.func,
  editFn: PropTypes.func,
  data: PropTypes.object

}

export default  withRouter(UpdatedStatus);