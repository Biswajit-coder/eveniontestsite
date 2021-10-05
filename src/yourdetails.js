import React, { Component } from 'react';
class YourDetails extends Component {
    constructor() {
        super();
        this.state = {
            recordList: []
        }
    }

    getRecord = () => {
        fetch("data.json")
            .then(response => response.json())
            .then(result => this.setState({
                recordList: result
            }))
    }

    getStateDist = () => {

    }

    componentDidMount() {
        this.getRecord();
        this.getStateDist();
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-center mb-4">
                        <h3 className="text-info"> Your Details </h3>
                        <table className="table">
                            <thead>
                                <tbody>
                                    <tr>
                                        <th> Name: </th>
                                    </tr>
                                    <tr>
                                        <th> DoB: </th>
                                    </tr>
                                    <tr>
                                        <th> Gender: </th>
                                    </tr>
                                    <tr>
                                        <th> Email: </th>
                                    </tr>
                                    <tr>
                                        <th> Mobile: </th>
                                    </tr>
                                    <tr>
                                        <th> Address: </th>
                                    </tr>
                                </tbody>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default YourDetails;