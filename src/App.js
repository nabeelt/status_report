import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header_component.js';
import Footer from './footer/footer_component.js';
import StatusEntry from './statusEntry/statusEntry_component.js';
import UpdatedStatus from './updateStatus/updateStatus_component.js';

var statusReport = JSON.parse(localStorage.getItem("status")) || [];
class App extends Component {
  constructor(){
      super();
      this.state = {
          statusReport: []
      }
      this.updateStatus = this.updateStatus.bind(this);
      this.deleteEachStatus = this.deleteEachStatus.bind(this);
      this.editEachStatus = this.editEachStatus.bind(this);
    }
    componentWillMount(){           
      var storage = JSON.parse(localStorage.getItem("status")) || [];
      this.setState({ statusReport: storage})
    }

    updateStatus(data) {
   
      statusReport.push({status: data.value, date:data.date, id: new Date().getTime(),activity: data.activity, timeSpent: data.timeSpentHrs+":"+data.timeSpentMts+"Hrs"});
      localStorage.setItem("status",JSON.stringify(statusReport));
      this.setState({ statusReport: statusReport});
    }

    deleteEachStatus(id) {
       var statusArray = this.state.statusReport;
       var newArray = statusArray.filter(status => status.id !== id);
       localStorage.setItem("status",JSON.stringify(newArray));
       this.setState({statusReport: newArray});
    }
    
    editEachStatus(statusVal,id) {
      var statusArray = this.state.statusReport;
      var newArray = statusArray.map(function(obj) {
        if (obj.id === id) {
          obj.status = statusVal
        }

        return obj
      })
      this.setState({statusReport: newArray});
      localStorage.setItem("status",JSON.stringify(newArray));
    }

  render() {
    return (
      <div>
        <Header name="Daily Status" />
        <StatusEntry updateStatus={this.updateStatus}/>
        <UpdatedStatus  editFn={this.editEachStatus} deleteFn={this.deleteEachStatus} data={this.state.statusReport}/>
        <Footer text="2017 @ copyright protected" />
      </div>
    );
  }
}

export default App;
