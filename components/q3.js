import React, { Component } from 'react';
import Question from './question'

class Question3 extends Component{
    render(){
        const data = {
            question:'How do you write "Hello World" in an alert box',
            option1:'alert("Hello World");',
            option2:'alertBox("Hello World");',
            option3:'msg("Hello World");',
            option4:'msgBox("Hello World");',
            nextPath:'/q4',
            duration:5,
            count:3
        }
        return(
            <Question data={data} />
        )
    }
}

export default Question3;