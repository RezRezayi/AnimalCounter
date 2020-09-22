import React, { Component } from 'react';
import "./Register.css";

class Register extends Component {
    state = {}
    render() {
        return (



<React.Fragment>


<div className="modal-dialog text-center">
    <div className="col-sm-8 main-section">
        <div className="modal-content">
        <h2>Sign Up</h2>
        
            <form action="" className="col-12">
               
                <div className="form-group list-group-item">
                    <span className="login-icon"><i className="fa fa-user"></i>
                    </span>
                    <input type="text" className="form-control login-input" placeholder="Enter Your Name"/>
                </div>

        
    

        <div className="form-group list-group-item">
            <span className="login-icon"><i className="fa fa-envelope"></i>
            </span>
            <input type="email" className="form-control login-input" placeholder="Enter Your Email"/>
        </div>

        <div className="form-group list-group-item">
            <span className="login-icon"><i className="fa fa-phone"></i>
            </span>
            <input type="text" className="form-control login-input" placeholder="Enter Your Animal's Age"/>
        </div>

        <div className="form-group list-group-item">
            <span className="login-icon"><i className="fa fa-lock"></i>
            </span>
            <input type="password" className="form-control login-input" placeholder="Enter Your Password"/>
        </div>
        <button type="submit" className="btn btn-primary"><i className="fas fa-sign-in-alt"></i>Submit</button>
        </form>
     

    </div>
</div>  
</div>

  



            </React.Fragment>


                );
           }
       }
       export default Register;