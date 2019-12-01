import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Question1 from './components/q1';
import Question2 from './components/q2';
import Question3 from './components/q3';
import Question4 from './components/q4';
import Question5 from './components/q5';
import Form from './components/sign_in';
import Result from './components/result';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Form}></Route>
                    <Route path='/q1' component={Question1}></Route>
                    <Route path='/q2' component={Question2}></Route>
                    <Route path='/q3' component={Question3}></Route>
                    <Route path='/q4' component={Question4}></Route>
                    <Route path='/q5' component={Question5}></Route>
                    <Route path='/result' component={Result}></Route>
                </Switch>
            </Router>
        )
    }
}


export default App;