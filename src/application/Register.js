import React, { Component } from 'react';
import "./Allcss.css";
import { Link } from 'react-router-dom';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { firstname: "",
                       lastname: "",
                       email: "",
                       password: "",
                       firstnameerror: "",
                       emailerror: "",
                       passworderror: ""
                    }
    }

    
    handelChange = (event) => {

        this.setState({ [event.target.name]:event.target.value })
    }

    handelSubmit = (event) => {

        if(this.state.firstname === "" || this.state.email === "" || this.state.password === "")
        {
            //alert("Every field is mandatory");
            this.setState({firstnameerror: "Please enter your first name",
                            emailerror: "Please enter your email",
                            passworderror: "Please enter a password"})
        }
        else{ 
            alert( JSON.stringify(this.state));
        }
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <div className="card background">
                    <div className="card-head text-center">
                        <h5><img src={('./blue_dropbox_logo-vfl2gAvQk.png')} alt="logo" />  Create a Dropbox account</h5>
                    </div>
                    <form onSubmit = {this.handelSubmit}>
                        <div className="space">
                            <div>
                                <div className="form-group inputdiv">
                                    <span>{this.state.firstnameerror}</span>
                                    <input type="text" className="form-control input" name="firstname" id="firstname" placeholder="First Name"
                                    value={this.state.firstname} onChange={this.handelChange}
                                />
                                    
                                </div>
                                <div className="form-group inputdiv">
                                    <input type="text" className="form-control input" name="lastname" id="lastname" placeholder="Last Name"
                                    value={this.state.lastname} onChange={this.handelChange}
                                    />
                                </div>
                                <div className="form-group inputdiv">
                                    <span>{this.state.emailerror}</span>
                                    <input type="email" className="form-control input" name="email" id="email" placeholder="Email"
                                    value={this.state.email} onChange={this.handelChange}
                                    />
                                </div>
                                <div className="form-group inputdiv">
                                    <span>{this.state.passworderror}</span>
                                    <input type="password" className="form-control input" name="password" id="password" placeholder="Password"
                                    value={this.state.password} onChange={this.handelChange}
                                    />
                                </div>
                            </div>
                            <p className="policy">This page is protected by reCAPTCHA, and subject to the Google 
                            <a href="https://www.google.com/policies/privacy/" rel="noreferrer" target="_blank"> Privacy Policy </a> 
                            and <a href="https://www.google.com/policies/terms/" rel="noreferrer" target="_blank"> Terms of Service</a>.</p>
                            
                            <div className="text-center">
                                <input name="tos_agree" type="checkbox" />
                                <span className="text-center"> I agree to the 
                                 <a href="https://www.dropbox.com/terms" rel="noreferrer" target="_blank"> Dropbox Terms</a></span>
                            </div>
                            
                        </div>
                        <button className="button btn btn-primary">Create an account</button>
                        <p className="text-center"><Link to="/">I already have an account</Link></p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;