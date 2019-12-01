import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sign_in.css';

class SignIN extends Component{
    render(){
        return(
            <div id='sign-in'>
                <div  className='container sign-in'>
                    <div className='form col-md-5'>
                        <h2 className='text-center'>Sign In</h2>
                        <div className='form-group'>
                            <input type="text" id='gr' required />
                            <label className="control-label" htmlFor="gr">Gr No</label>
                        </div>
                        <div className='form-group'>
                            <input type="text" id='name' required />
                            <label className="control-label" htmlFor="name">Name</label>
                        </div>
                        <div className='form-group'>
                            <input type="email" id='email' required />
                            <label className="control-label" htmlFor="email">Email</label>
                        </div>
                        <div className='form-group'>
                            <input type="password" id='pass' required />
                            <label className="control-label" htmlFor="pass">Password</label>
                        </div>
                        <div className="form-group">
                            <select className='form-control'>
                                <option>Exam 1</option> 
                                <option>Exam 2</option> 
                                <option>Exam 3</option> 
                                <option>Exam 4</option> 
                                <option>Exam 5</option> 
                            </select>
                        </div>
                        <button className='btn btn-info my-2 w-100' onClick={() => this.props.history.push('./q1')}>Start Exam</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIN;