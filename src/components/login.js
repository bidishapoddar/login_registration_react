import React,{Component} from 'react';
import "./login.css";

class Login extends Component{
    render(){
        return(
            <div className="Login">
                <div className="card col-6 offset-3 new">
                    <div className="card-head text-center">
                        <h4>Login</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" id="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" id="password"/>
                            </div>
                            <button className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;