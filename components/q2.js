import React, { Component } from 'react';
import Question from './question'

class Question2 extends Component{
    render(){
        const data = {
            question:'Where is the correct place to insert a JavaScript',
            option1:'The <body> section',
            option2:'The <head> section',
            option3:' Both the <body> section and the <head> section are correct',
            option4:'None',
            nextPath:'/q3',
            duration:5,
            count:2
        }
        return(
            <Question data={data} />
        )
    }
}

export default Question2;