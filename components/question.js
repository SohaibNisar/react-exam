import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './question.css';

class Question extends Component{
    constructor(props) {
        super(props)
        this.state={
            time:(this.props.data.duration*1000)
        }
        this.timer = 0;
        this.next = 0;
    }
    
    componentDidMount(){
        this.startTimer();
        this.next = setTimeout(() => {
            this.props.history.push(this.props.data.nextPath);
        },(this.props.data.duration*1000));
    }

    startTimer() {
        this.timer = setInterval(() => this.countDown(), 100);
    }
    
    countDown(props) {
        this.setState({time:(this.state.time-100)});
        if (this.state.time === 0) { 
            clearInterval(this.timer);
        }
    }

    msToTime = (duration) => {
        let milliseconds = parseInt((duration % 1000) / 100);
        let seconds = Math.floor((duration / 1000) % 60);
        let minutes = Math.floor((duration / (1000 * 60)) % 60);
        let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
        
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        
        let time = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
        
        return(time)
    }

    nextPath = () => {
        this.props.history.push(this.props.data.nextPath);
        clearInterval(this.next);
    }

    end = () => {
        this.props.history.push('./result')
        clearInterval(this.next);
    }
    
    render(){
        return(
            <div id='question'>
                <div className='header p5 bg-info py-2 px-5'> 
                    <span className='w-50 text-white font-weight-bold'>Exam 1</span>
                    <span className='w-50 float-right text-right text-white font-weight-900'>Timer {this.msToTime(this.state.time)}</span>
                </div>
                <div className='question container-fluid col-md-6'>
                    <div className='form'>
                        <div className='title text-center'>
                            <h6>Question no {this.props.data.count}</h6>
                        </div>
                        <hr/>
                        <div className='question-para'>
                            <p>{this.props.data.question}?</p>
                        </div>
                        <div className='options'>
                            <div className='option one form-check'>
                                <input className="form-check-input" type="radio" name='option' id="option1" />
                                <label className="form-check-label" htmlFor="option1">{this.props.data.option1}</label>
                            </div>
                            <div className='option two form-check'>
                                <input className="form-check-input" type="radio" name='option' id="option2" />
                                <label className="form-check-label" htmlFor="option2">{this.props.data.option2}</label>
                            </div>
                            <div className='option three form-check'>
                                <input className="form-check-input" type="radio" name='option' id="option3" />
                                <label className="form-check-label" htmlFor="option3">{this.props.data.option3}</label>
                            </div>
                            <div className='option four form-check'>
                                <input className="form-check-input" type="radio" name='option' id="option4" />
                                <label className="form-check-label" htmlFor="option4">{this.props.data.option4}</label>
                            </div>
                        </div>
                        <div className='w-100 text-center'>
                            <button className='btn btn-info mt-4 px-4'  onClick={this.nextPath}>Next</button>
                            <button className='btn btn-danger ml-3 mt-4 px-4' onClick={this.end}>End Exam</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter (Question);