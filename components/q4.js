import React, { Component } from 'react';
import Question from './question'

class Question4 extends Component{
    render(){
        const data = {
            question:'How do you create a function in JavaScript',
            option1:'function = myFunction()',
            option2:'function myFunction()',
            option3:'function:myFunction()',
            nextPath:'/q5',
            option4:'none',
            duration:5,
            count:4
        }
        return(
            <Question data={data} />
        )
    }
}

export default Question4;