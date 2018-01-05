import React, { Component } from 'react';

class Details extends Component {
    constructor (){
        super();
        this.state = {
            details: {},
        }

        this.renderDetails = this.renderDetails.bind(this)
    }

    componentWillMount() {
        const statusArray = JSON.parse(localStorage.getItem('status'))
        const { id } = this.props.match.params;
        const details = statusArray.find(el => el.id === parseInt(id))
        this.setState({ details })
    }

    renderDetails() {
        const { details } = this.state

        return (
            <div>
                <span>{details.status}</span>
            </div>
        )
    }

    render() { 
        return (
            <div>
                <h1>Details</h1>
                {this.renderDetails()}
            </div>   
        )
    }
}

export default Details;