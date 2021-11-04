import React, { Component } from 'react';
import './App.css';
import Home from "./pages/home";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './component/LoginPage/Login';
import { DonorRegistration } from './component/Registration/DonorRegistration';
import { BeneficiaryRegistration } from './component/Registration/BeneficiaryRegistration';
import { NgoRegistration } from './component/Registration/NgoRegistration';
import { UserUi } from './component/UserDashBoard/UserUi';

import ExtendExpireDate from './component/UserDashBoard/ExtendExpireDate';
import UpdateUser from './component/UserDashBoard/UpdateUser';
import DonorList from './component/UserDashBoard/DonorList';
import ResetUserPassword from './component/UserDashBoard/ResetUserPassword';
import { UserProfileView } from './component/UserDashBoard/UserProfileView';
import Withdrawl from './component/UserDashBoard/Withdrawl';
import About from './pages/home';
import { NgoUserUi } from './component/NgoDashBoard/NgoUserUi';
import NgoDonorList from './component/NgoDashBoard/NgoDonorList';
import NgoExtendExpireDate from './component/NgoDashBoard/NgoExtendExpireDate';
import NgoResetUserPassword from './component/NgoDashBoard/NgoResetUserPassword';
import UpdateNgoUser from './component/NgoDashBoard/UpdateNgoUser';
import { NgoUserProfileView } from './component/NgoDashBoard/NgoUserProfileView';
import NgoWithdrawl from './component/NgoDashBoard/NgoWithdrawl';
import NgoCreateNewRaiseCase from './component/NgoDashBoard/NgoCreateNewRaiseCase';
import { DonorUserNav } from './component/DonorDashBoard/DonorUserNav';
import { DonorUserGrid } from './component/DonorDashBoard/DonorUserGrid';
import { DonorUserUi } from './component/DonorDashBoard/DonorUserUi';
import {DonorUserProfileView} from './component/DonorDashBoard/DonorUserProfileView';
import TransactionList from './component/DonorDashBoard/TransactionList';
import ResetDonorUserPassword from './component/DonorDashBoard/ResetDonorUserPassword';
import TaxReport from './component/DonorDashBoard/TaxReport';
import UpdateDonorUser from './component/DonorDashBoard/UpdateDonorUser';
import Donate from './component/DonorDashBoard/Donate';
import { NgoUserGrid } from './component/NgoDashBoard/NgoUserGrid';
import { NgoUserNav } from './component/NgoDashBoard/NgoUserNav';
import { AdminUserUi } from './component/AdminDashBoard/AdminUserUi';
import { AdminUserGrid } from './component/AdminDashBoard/AdminUserGrid';
import { AdminUserNav } from './component/AdminDashBoard/AdminUserNav';
import ApprovedBeneficiary from './component/AdminDashBoard/ApprovedBeneficiary';
import ApprovedBeneficiaryList from './component/AdminDashBoard/ApprovedBeneficiaryList';
import ApprovedDonor from './component/AdminDashBoard/ApprovedDonor';
import ApprovedDonorList from './component/AdminDashBoard/ApprovedDonorList';
import ApprovedNgo from './component/AdminDashBoard/ApprovedNgo';
import ApprovedNgoList from './component/AdminDashBoard/ApprovedNgoList';
import ApproveWithdrawlRequest from './component/AdminDashBoard/ApproveWithdrawlRequest';
import BeneficiaryList from './component/AdminDashBoard/BeneficiaryList';
import DeleteBeneficiary from './component/AdminDashBoard/DeleteBeneficiary';
import DeleteDonor from './component/AdminDashBoard/DeleteDonor';
import DeleteNgo from './component/AdminDashBoard/DeleteNgo';
import NgoList from './component/AdminDashBoard/NgoList';
import NotApprovedBeneficiaryList from './component/AdminDashBoard/NotApprovedBeneficiaryList';
import NotApprovedDonorList from './component/AdminDashBoard/NotApprovedDonorList';
import NotApprovedNgoList from './component/AdminDashBoard/NotApprovedNgoList';
import DeleteTransaction from './component/AdminDashBoard/DeleteTransaction';
import home from './pages/home';
import {  Contactus } from './component/about/Contactus';
import { Aboutus } from './component/about/Aboutus';
















class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
  
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
        <Route path="/Login" component={Login} />
        <Route path="/DonorRegistration" component={DonorRegistration} />
        <Route path="/BeneficiaryRegistration" component={BeneficiaryRegistration} />
        <Route path="/NgoRegistration" component={NgoRegistration} />
        <Route path="/UserUi" component={UserUi} />
        <Route path="/UserProfileView" component={UserProfileView} />
        <Route path="/About" component={About} />
        <Route path="/NgoUserUi" component={NgoUserUi} />
        <Route path="/ExtendExpireDate" component={ExtendExpireDate} />
        <Route path="/UpdateUser" component={UpdateUser} />
        <Route path="/DonorList" component={DonorList} />
        <Route path="/ResetUserPassword" component={ResetUserPassword} />
        <Route path="/Withdrawl" component={Withdrawl} />
        <Route path="/NgoDonorList" component={NgoDonorList} />
        <Route path="/NgoExtendExpireDate" component={NgoExtendExpireDate} />
        <Route path="/NgoResetUserPassword" component={NgoResetUserPassword} />
        <Route path="/UpdateNgoUser" component={UpdateNgoUser} />
        <Route path="/NgoUserProfileView" component={NgoUserProfileView} />
        <Route path="/NgoWithdrawl" component={NgoWithdrawl} />
        <Route path="/NgoCreateNewRaiseCase" component={NgoCreateNewRaiseCase} />
        <Route path="/DonorUserNav" component={DonorUserNav} />
        <Route path="/DonorUserGrid" component={DonorUserGrid} />
        <Route path="/DonorUserUi" component={DonorUserUi} />
        <Route path="/DonorUserProfileView" component={DonorUserProfileView} />
          <Route path="/TransactionList" component={TransactionList} />
          <Route path="/ResetDonorUserPassword" component={ResetDonorUserPassword} />
          <Route path="/TaxReport" component={TaxReport} />
          <Route path="/UpdateDonorUser" component={UpdateDonorUser} />
          <Route path="/Donate" component={Donate} />
          <Route path="/AdminUserUi" component={AdminUserUi} />
          <Route path="/AdminUserGrid" component={AdminUserGrid} />
          <Route path="/AdminUserNav" component={AdminUserNav} />
          <Route path="/ApprovedBeneficiary" component={ApprovedBeneficiary} />
          <Route path="/ApprovedBeneficiaryList" component={ApprovedBeneficiaryList} />
          <Route path="/ApprovedDonor" component={ApprovedDonor} />
          <Route path="/ApprovedDonorList" component={ApprovedDonorList} />
          <Route path="/ApprovedNgo" component={ApprovedNgo} />
          <Route path="/ApprovedNgoList" component={ApprovedNgoList} />
          <Route path="/ApproveWithdrawlRequest" component={ApproveWithdrawlRequest} />
          <Route path="/BeneficiaryList" component={BeneficiaryList} />
          <Route path="/DeleteBeneficiary" component={DeleteBeneficiary} />
          <Route path="/DeleteDonor" component={DeleteDonor} />
          <Route path="/DeleteNgo" component={DeleteNgo} />
          <Route path="/DeleteTransaction" component={DeleteTransaction} />
          <Route path="/NgoList" component={NgoList} />
          <Route path="/NotApprovedBeneficiaryList" component={NotApprovedBeneficiaryList} />
          <Route path="/NotApprovedDonorList" component={NotApprovedDonorList} />
          <Route path="/NotApprovedNgoList" component={NotApprovedNgoList} />
          <Route path="/home" component={home} />
          <Route path="/Contactus" component={Contactus}/>
          <Route path="/Aboutus" component={Aboutus}/>
         
        

      </Switch> 
    </Router>
    

    );
  }
}

export default App;

