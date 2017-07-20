import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import ProfileImage from "./UserProfile/ProfileImage";
import UserProfileInfo from "./UserProfile/UserProfileInfo";
import CompanyInfo from "./UserProfile/CompanyInfo";
import Notifications from "./UserProfile/Notifications";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.props.loadProfile();
  }

  handleChange(index, lastIndex, event) {
    // console.log(index, lastIndex, event);
  }

  userInfoInitialValues() {
    if(this.props.loading) return;

    let homeAddress = this.props.profile.homeAddress || {};

    return {
      firstName: this.props.profile.firstName,
      middleName: this.props.profile.middleName,
      lastName: this.props.profile.lastName,
      email: this.props.profile.email,
      dob: this.props.profile.dob,
      phone: this.props.profile.phone,
      address1: homeAddress.address1,
      address2: homeAddress.address2,
      city: homeAddress.city,
      state: homeAddress.state,
      zip: homeAddress.zip
    };
  }

  submitUserInfo(values) {
    this.props.setInprocess(true);
    this.props.updateProfile({
      firstName: values.firstName,
      lastName: values.lastName,
      middleName: values.middleName,
      dob: values.dob,
      phone: values.phone,
      currentPassword: values.currentPassword,
      password: values.password,
      passwordConfirmation: values.passwordConfirmation,
      homeAddress: {
        address1: values.address1,
        address2: values.address2,
        city: values.city,
        state: values.state,
        zip: values.zip
      }
    });
  }

  companyInfoInitialValues() {
    if(this.props.loading) return;

    let company = this.props.profile.company || {};

    return {
      name: company.name,
      mission: company.mission,
      goals: company.goals,
      strategy: company.strategy,
      timeframe: company.timeframe,
      market: company.market,
      criteria: company.criteria,
      niche: company.niche,
      states: this.props.profile.rentalStates,
    };
  }

  submitCompanyInfo(values) {
    this.props.setInprocess(true);
    this.props.updateProfile({
      company: {
        name: values.name,
        mission: values.mission,
        goals: values.goals,
        strategy: values.strategy,
        timeframe: values.timeframe,
        market: values.market,
        criteria: values.criteria,
        niche: values.niche,
      },
      currentPassword: values.currentPassword,
      rentalStates: values.states
    });
  }

  updateAvatar(file) {
    this.props.setInprocess(true);
    this.props.updateAvatar(file);
  }

  updateNotifyVia(values) {
    this.props.setInprocess(true);
    this.props.updateProfile({
      notifyVia: values.notifyVia
    });
  }

  render() {
    console.log('calling render...');
    return (
      <div>
        Edit my profile.

        <Tabs onSelect={this.handleChange.bind(this)}>
          <TabList>
            <Tab>Image</Tab>
            <Tab>Information</Tab>
            <Tab>Company</Tab>
            <Tab>Payment</Tab>
            <Tab>Status</Tab>
            <Tab>Notifications</Tab>
          </TabList>
          <TabPanel>
            <h2> Image content </h2>
            <ProfileImage avatarUrl={this.props.profile.avatarUrl}
              loading={this.props.loading}
              inProcess={this.props.inProcess}
              onSubmit={this.updateAvatar.bind(this)} />
          </TabPanel>
          <TabPanel>
            <h2> User Information </h2>
            <UserProfileInfo onSubmit={this.submitUserInfo.bind(this)}
              initialValues={this.userInfoInitialValues()}
              inProcess={this.props.inProcess}
              loading={this.props.loading} />
          </TabPanel>
          <TabPanel>
            <h2>Company Information</h2>
            <CompanyInfo onSubmit={this.submitCompanyInfo.bind(this)}
              initialValues={this.companyInfoInitialValues()}
              inProcess={this.props.inProcess}
              loading={this.props.loading} />
          </TabPanel>
          <TabPanel>
            <h2> Payment content </h2>
          </TabPanel>
          <TabPanel>
            { (!this.props.profile.status || this.props.profile.status == "paid") && (
              <div>
                <h2>Upgrade Account</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <button type="button">Upgrade Account</button>
                </p>
              </div>) }
            <h2>Delete Account</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <a href="#">Delete Account</a>
            </p>
          </TabPanel>
          <TabPanel>
            <h2> How would you like to be notified for updates? </h2>
            <Notifications onSubmit={this.updateNotifyVia.bind(this)}
              initialValues={{ notifyVia: this.props.profile.notifyVia }}
              inProcess={this.props.inProcess}
              loading={this.props.loading} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default UserProfile;
