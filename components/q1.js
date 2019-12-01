import React, { Component } from 'react';
import Question from './question'

class Question1 extends Component{
    render(){
        const data = {
            question:'Inside which HTML element do we put the JavaScript',
            option1:'<script>',
            option2:'<scripting>',
            option3:'<js>',
            option4:'<javascript>',
            nextPath:'/q2',
            duration:5,
            count:1
        }
        return(
            <Question data={data} />
        )
    }
}

export default Question1;