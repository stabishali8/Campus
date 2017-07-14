import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';
import {Dashboard} from './Dashboard';
import {UpdateForm} from './UpdateForm';
import {ViewProfile} from './ViewProfile';
import {ViewJob} from './ViewJob';
import {ViewCompany} from './ViewCompany';
import App from './App';
import { Whoops404 } from './Whoops404'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
ReactDOM.render(
<Router history={browserHistory}>  
    <Route path="/" component={App}/>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/updateform" component={UpdateForm}/>
    <Route path="/viewprofile" component={ViewProfile}/>
    <Route path="/viewcompany" component={ViewCompany}/>    
    <Route path="/viewjob" component={ViewJob}/>
    <Route path="*" component={Whoops404}/>
</Router>, 
document.getElementById('root'));
registerServiceWorker();
