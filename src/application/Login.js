import React, { Component } from 'react';
import "./Allcss.css";
import { Link } from 'react-router-dom';

 class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { email: "",
                       password: "",
                       emailerror: "",
                       passworderror: ""
                    }
    }

    
    handelChange = (event) => {

        this.setState({ [event.target.name]:event.target.value })
    }

    handelSubmit = (event) => {

        if(this.state.email === "" || this.state.password === "")
        {
            this.setState({emailerror: "Please enter your email",
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
                        <h5><img src={('./blue_dropbox_logo-vfl2gAvQk.png')} alt="logo" />  Sign in to Dropbox</h5>
                    </div>
                    
                    <button className="button1 btn">Sign in with Google</button>
                    <button className="button2 btn">Sign in with Apple</button>

                    <h6>or</h6>
                    
                    <form onSubmit = {this.handelSubmit}>
                        <div className="space">
                            <div>
                                <div className="form-group inputdiv">
                                    <span>{this.state.emailerror}</span>
                                    <input type="email" className="form-control input" name="email" id="email" placeholder="Email"
                                    value={this.state.email} onChange={this.handelChange}/>
                                </div>
                                <div className="form-group inputdiv">
                                    <span>{this.state.passworderror}</span>
                                    <input type="password" className="form-control input" name="password" id="password" placeholder="Password"
                                    value={this.state.password} onChange={this.handelChange}/>
                                </div>
                            </div>
                            
                            <p className="policy">This page is protected by reCAPTCHA, and subject to the Google 
                            <a href="https://www.google.com/policies/privacy/" rel="noreferrer" target="_blank"> Privacy Policy </a> 
                            and <a href="https://www.google.com/policies/terms/" rel="noreferrer" target="_blank"> Terms of Service</a>.</p>
                            
                            <div>
                                <input name="tos_agree" type="checkbox" checked="checked" />
                                <span> Remember me</span>
                            </div>

                        </div>
                        <button className="button btn btn-primary">Sign in</button>
                        <p className="forgot">Forgot your password?</p>
                        <p className="text-center">(or <Link to="/Register">create an account</Link>)</p>
                        
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;