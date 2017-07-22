import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';
import {Dashboard} from './Dashboard';
import {CompanyDashboard} from './CompanyDashboard';
import {AdminDashboard} from './AdminDashboard';
import {UpdateForm} from './UpdateForm';
import {CompanyUpdateForm} from './CompanyUpdateForm';
import {ViewProfile} from './ViewProfile';
import {CompanyViewProfile} from './CompanyViewProfile';
import {ViewJob} from './ViewJob';
import {ViewCompany} from './ViewCompany';
import {ViewStudent} from './ViewStudent';
import {CompanyPostJob} from './CompanyPostJob';
import {ViewPostJob} from './ViewPostJob';
import {AdminStudentView} from './AdminStudentView';
import {AdminCompanyView} from './AdminCompanyView';
import {AdminJobView} from './AdminJobView';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, } from 'react-router-dom';
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
            <Route path="/admindashboard" component={AdminDashboard}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/companydashboard" component={CompanyDashboard}/>
            <Route path="/updateform" component={UpdateForm}/>
            <Route path="/companyupdateform" component={CompanyUpdateForm}/>            
            <Route path="/viewprofile" component={ViewProfile}/>
            <Route path="/companyviewprofile" component={CompanyViewProfile}/>
            <Route path="/viewcompany" component={ViewCompany}/>
            <Route path="/viewstudent" component={ViewStudent}/>
            <Route path="/companypostjob" component={CompanyPostJob}/>
            <Route path="/viewpostjob" component={ViewPostJob}/>
            <Route path="/adminstudentview" component={AdminStudentView}/>
            <Route path="/admincompanyview" component={AdminCompanyView}/>
            <Route path="/adminjobview" component={AdminJobView}/>
            <Route path="/viewjob" component={ViewJob}/>
            {/*<Route path="*" component={Whoops404}/>        */}
        </div>    
</BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
