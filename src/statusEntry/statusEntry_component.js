import React, { Component } from 'react';

const greyBorder = {
  border: '1px solid #ccc'
};
const centerAlign ={
  float: 'none',
  margin: '0 auto'
}

const textCenter = {
  textAlign: 'center',
}

class StatusEntry extends Component{
   constructor(){
      super();
      this.state = {
          value: '',
          date:'',
          dateArray:[],
          projectName:'',
          activity:'Coding',
          timeSpentHrs: '00',
          timeSpentMts: '00'
      }
    this.handleChange = this.handleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.getDates = this.getDates.bind(this);
}

componentWillMount(){
  this.state.dateArray = this.getDates();
  this.state.projectName = 'NYU';
}

getDates() {
  var now = +new Date; // Unix timestamp in milliseconds
  var today = new Date();
  const oneDayTimeStamp = 1000 * 60 * 60 * 24; // Milliseconds in a day
  var diff;
  var yesterdayDate;
  var yesterdayString;
  var todayString =  today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  this.state.date = todayString;
  var newArray=[todayString];
  for(var i=0;i<6;i++) {
    diff = now - oneDayTimeStamp;
    yesterdayDate = new Date(diff);
    yesterdayString = yesterdayDate.getDate() + '/' + (yesterdayDate.getMonth() + 1) + '/' + yesterdayDate.getFullYear();
    newArray.push(yesterdayString);
    now = yesterdayDate ;
  }
  return newArray;
}

handleChange (e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
}


onHandleSubmit =(e)=>{
  const { value, date, projectName, activity, timeSpentHrs,timeSpentMts } = this.state; // const value = this.state.value
  const data = { value, date, projectName, activity, timeSpentHrs,timeSpentMts } // const data = { value: 10, date: '20/12/2017' }
  this.props.updateStatus(data);
  this.state.value ='';
}
  render(){
    return(
      <div className="col-md-11 status-entry-wrapper" style={{...greyBorder,...centerAlign}}>
        <h3>Bursts</h3>
        <div className="col-md-12 padding20">
          <div className="col-md-2">
            <label className="col-md-12 padding0">
              Date:
            </label>
              <select className="col-md-12 form-control" style={greyBorder} name="date" value={this.state.date} onChange={this.handleChange}>
               {this.state.dateArray.map((date) => 
                  <option value={date}>{date}</option>
                )}
              </select>

          </div>
          <div className="col-md-4 padding0">
            <label className="col-md-12 padding0">
              Project:
            </label>
              <select className="col-md-12 form-control" style={greyBorder} name="projectName" value={this.state.projectName} onChange={this.handleChange}>
                <option value="N/A">N/A</option>
                <option value="NYU">NYU</option>
              </select>
          </div>
          <div className="col-md-3">
            <label className="col-md-12 padding0">
              Activity Type:
            </label>
              <select className="col-md-12 form-control" style={greyBorder} name="activity" value={this.state.activity} onChange={this.handleChange}>
                <option value="Project management">Project management</option><option value="Training">Training</option><option value="Architecting">Architecting</option><option value="Requirements analysis">Requirements analysis</option><option value="System design">System design</option><option value="Coding" selected="selected">Coding</option><option value="Graphic design">Graphic design</option>
              </select>
          </div>
          <div className="col-md-3">
            <label className="col-md-12 padding0">
              Time Spent:
            </label>
              <div className="col-md-6 padding0">
                <select className="col-md-12 form-control" style={greyBorder} name="timeSpentHrs" value={this.state.timeSpentHrs} onChange={this.handleChange}>
                  <option value="00">00</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                </select>
              </div>
              <div className="col-md-6 padding0">
                <select className="col-md-12 form-control" style={greyBorder} name="timeSpentMts" value={this.state.timeSpentMts} onChange={this.handleChange}>
                  <option value="00">00</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                  </select>
              </div>
              </div>
        </div>
        <div className="padding20">
          <textarea rows="6" className="form-control" value={this.state.value} 
          onChange={(e)=>this.setState({value: e.target.value})}
          placeholder="Enter your status here"></textarea>
         </div>
         <div className="col-md-12" style={{...textCenter,...centerAlign}}> 
           <button onClick={()=> this.onHandleSubmit()} className="btn btn-primary">Save</button>
         </div>
        
      </div>
    );
  }
}

export default StatusEntry;