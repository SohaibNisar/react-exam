import React, { Component } from 'react';
import './result.css'

class Result extends Component{
    render(){
        return(
            <div id='result'>
                <h1>Result</h1>
                <button className='btn btn-info my-2 px-5 text-center' onClick={() => this.props.history.push('./')}>Go To Home</button>
            </div>
        )
    }
}

export default Result;