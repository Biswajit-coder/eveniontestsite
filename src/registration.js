import React, { Component } from 'react';
// import React, { useState , useEffect } from 'react';
import axios from 'axios';

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            fieldList: [],
            inputfield: {},
            fielderror: {},
            message: '',
            firstname: '',
            lastname: '',
            dateofbirth: '',
            gender: '',
            email: '',
            mobile: '',
            addr: ''
        }
    }

    processFirstname = (obj) => {
        this.setState({ firstname: obj.target.value })
    }

    processLaststname = (obj) => {
        this.setState({ lastname: obj.target.value })
    }

    processDateofbirth = (obj) => {
        this.setState({ dateofbirth: obj.target.value })
    }

    processGender = (obj) => {
        this.setState({ gender: obj.target.value })
    }

    processEmail = (obj) => {
        this.setState({ email: obj.target.value })
    }

    processMobile = (obj) => {
        this.setState({ mobile: obj.target.value })
    }

    processState = (obj) => {
        this.setState({ state: obj.target.value })
    }

    processDist = (obj) => {
        this.setState({ dist: obj.target.value })
    }

    processAddress = (obj) => {
        this.setState({ addr: obj.target.value })
    }

    processInput = (obj) => {
        let inputfield = this.state.inputfield;
        inputfield[obj.target.name] = obj.target.value;

        this.setState({
            inputfield
        })
    }

    save = (obj) => {
        let newUser = {
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "dateofbirth": this.state.dateofbirth,
            "gender": this.state.gender,
            "email": this.state.email,
            "mobile": this.state.mobile,
            "addr": this.state.addr
        }

        let url = "http://localhost:3001/users";
        axios.post(url, newUser).then(response=>{
            this.setState({
                firstname:'',
                lastname:'',
                dateofbirth:'',
                gender:'',
                email:'',
                mobile:'',
                addr:''
            })
        })

        obj.preventDefault();
        let fielderror = this.state.fielderror;
        let inputfield = this.state.inputfield;
        let formStatus = true;

        //for firstname
        if (!inputfield['firstname']) {
            formStatus = false;
            fielderror['firstnameerror'] = "Please enter your name !";
        } else {
            fielderror["firstnameerror"] = "";
        }

        // //for DOB
        // let dpattern = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

        // if (!dpattern.test(inputfield['dateofbirth'])) {
        //     formStatus = false;
        //     fielderror['dateofbirtherror'] = "Please enter your DOB...";
        // } else {
        //     fielderror['dateofbirtherror'] = "";
        // }

        //getting error in date of birth field at the time of validation


        //for email
        let epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!epattern.test(inputfield['email'])) {
            formStatus = false;
            fielderror['emailerror'] = "Please enter your Email-id !";
        } else {
            fielderror["emailerror"] = "";
        }

        //for mobile
        let mpattern = /^[6-9]\d{9}$/;

        if (!mpattern.test(inputfield['mobile'])) {
            formStatus = false;
            fielderror['mobileerror'] = "Please enter your 10 digit mobile no. !";
        } else {
            fielderror["mobileerror"] = "";
        }

        //for state
        if (!inputfield['state']) {
            formStatus = false;
            fielderror['stateerror'] = "Please select your state !";
        } else {
            fielderror["stateerror"] = "";
        }

        //for district
        if (!inputfield['dist']) {
            formStatus = false;
            fielderror['disterror'] = "Please select your district !";
        } else {
            fielderror["disterror"] = "";
        }

        //for message
        let msg = "";
        if (formStatus == true) {
            msg = "Data save successfully..."
        } else {
            msg = "Failed : Invalid input..."
        }

        this.setState({
            fielderror,
            message: msg
        })

    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="bg-white p-4">
                            <h3 className="text-center text-primary"> User Registration </h3>
                            <p className="text-warning"> {this.state.message} </p>
                            <form onSubmit={this.save}>
                                <fieldset>
                                    <div className="row form-group mb-3">
                                        <div className="col-lg-6">
                                            <label> First Name <sup className="text-danger">*</sup></label>
                                            <input type="text" className="form-control" minLength="3" maxLength="20" name="firstname" placeholder="Enter first name" onChange={this.processFirstname} onChange={this.processInput} />
                                            <i className="text-danger">{this.state.fielderror.firstnameerror}</i>
                                        </div>
                                        <div className="col-lg-6">
                                            <label> Last Name </label>
                                            <input type="text" className="form-control input-box" maxLength="20" name="lastname" placeholder="Enter last name" onChange={this.processLastname} onChange={this.processInput} />
                                        </div>
                                    </div>
                                    <div className="row form-group mb-3">
                                        <div className="col-lg-6">
                                            <label> Gender <sup className="text-danger">*</sup> </label>
                                            <input type="radio" name="gender" value="male" onChange={this.processGender} />Male
                                            <input type="radio" name="gender" value="female" onChange={this.processGender} />Female
                                        </div>
                                        <div className="col-lg-6 input-group-date">
                                            <label> Date of Birth <sup className="text-danger">*</sup> </label>
                                            <input type="date" format={"DD-MM-YYYY"} name="dateofbirth" className="form-control" onChange={this.processDateofbirth} onChange={this.processInput} />
                                            <i className="text-danger"> {this.state.fielderror.dateofbirtherror} </i>
                                        </div>
                                    </div>
                                    <div className="row form-group mb-3">
                                        <div className="col-lg-6">
                                            <label> Email <sup className="text-danger">*</sup> </label>
                                            <input type="text" className="form-control" name="email" placeholder="Enter your email" onChange={this.processEmail} onChange={this.processInput} />
                                            <i className="text-danger"> {this.state.fielderror.emailerror} </i>
                                        </div>
                                        <div className="col-lg-6">
                                            <label> Mobile Number </label>
                                            <input type="number" className="form-control" name="mobile" placeholder="Enter your mobile no." onChange={this.processMobile} onChange={this.processInput} />
                                            <i className="text-danger"> {this.state.fielderror.mobileerror} </i>
                                        </div>
                                    </div>
                                    <div className="row form-group mb-3">
                                        <div className="col-lg-6">
                                            <label> State <sup className="text-danger">*</sup> </label>
                                            <select className="form-control" name="state" onChange={this.processState} onChange={this.processInput} >
                                                <option value="">Choose</option>
                                                <option value="abc">abc</option>
                                                <option value="def">def</option>
                                                <option value="ghi">ghi</option>
                                            </select>
                                            <i className="text-danger"> {this.state.fielderror.stateerror} </i>
                                        </div>
                                        <div className="col-lg-6">
                                            <label> District <sup className="text-danger">*</sup> </label>
                                            <select className="form-control" name="dist" onChange={this.processDist} onChange={this.processInput} >
                                                <option value="">Choose</option>
                                                <option value="abc">abc</option>
                                                <option value="def">def</option>
                                                <option value="ghi">ghi</option>
                                            </select>
                                            <i className="text-danger"> {this.state.fielderror.disterror} </i>
                                        </div>
                                    </div>
                                    <div className="row form-group mb-3">
                                        <label>Address</label>
                                        <textarea className="form-control" rows="2" maxLength="500" name="addr" placeholder="Enter your address" onChange={this.processAddress} onChange={this.processInput} />
                                    </div>
                                    <div className="row from-group mb-3">
                                        <div className="col-lg-6"></div>
                                        <div className="col-lg-6">
                                            <button type="submit" const path='/yourdetails' className="btn btn-primary float-right">Register</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        )
    }
}

export default Registration;