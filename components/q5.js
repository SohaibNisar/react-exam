import React, { Component } from 'react';
import Question from './question'

class Question5 extends Component{
    render(){
        const data = {
            question:'How do you call a function named "myFunction"',
            option1:'call function myFunction()',
            option2:'myFunction()',
            option3:'call myFunction()',
            nextPath:'/result',
            option4:'none',
            duration:5,
            count:5
        }
        return(
            <Question data={data} />
        )
    }
}

export default Question5;