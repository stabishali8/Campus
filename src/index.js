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
import { BrowserRouter, Route} from 'react-router-dom';
import * as firebase from 'firebase';
  
  var config = {
    apiKey: "AIzaSyBg6SNxyiByeYFh-sJrmvAnc2AdYraJVys",
    authDomain: "campus-5a4b0.firebaseapp.com",
    databaseURL: "https://campus-5a4b0.firebaseio.com",
    projectId: "campus-5a4b0",
    storageBucket: "campus-5a4b0.appspot.com",
    messagingSenderId: "760688971479"
  };
  firebase.initializeApp(config);

ReactDOM.render(
<BrowserRouter>
        <div>   
            <Route exact path="/" component={App}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/updateform" component={UpdateForm}/>
            <Route path="/viewprofile" component={ViewProfile}/>
            <Route path="/viewcompany" component={ViewCompany}/>    
            <Route path="/viewjob" component={ViewJob}/>
            {/*<Route path="*" component={Whoops404}/>        */}
        </div>    
</BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
