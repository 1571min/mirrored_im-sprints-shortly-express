import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as signupActions from '../modules/signup';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import SignupInput from '../components/SignupInput';
import { useAlert } from 'react-alert';

class Signup extends Component {
  state = {
    emailValue: '',
    usernameValue: '',
    passwordValue: '',
  };

  handleEmailChange = (e) => {
    this.setState({
      emailValue: e.target.value,
    });
  };

  handleUsernameChange = (e) => {
    this.setState({
      usernameValue: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      passwordValue: e.target.value,
    });
  };

  //회워가입 액션 전달
  handleSignup = () => {
    const { emailValue, usernameValue, passwordValue } = this.state;

    const { SignupActions } = this.props;

    SignupActions.signup({
      email: emailValue,
      username: usernameValue,
      password: passwordValue,
    }).then(() => {
      console.log('sucess save isSignup');
      localStorage.setItem('isSignup', false);
    });
  };

  render() {
    // const alert = useAlert();
    const { emailValue, usernameValue, passwordValue } = this.state;
    const { isSignup } = this.props;
    const {
      handleEmailChange,
      handlePasswordChange,
      handleUsernameChange,
      handleSignup,
    } = this;
    if (isSignup) {
      alert('추가 성공');
    }
    return (
      <div>
        {/* {isSignup ? alert('추가 성공') : ''} */}
        <SignupInput
          emailValue={emailValue}
          usernameValue={usernameValue}
          passwordValue={passwordValue}
          onEmailChange={handleEmailChange}
          onUsernameChange={handleUsernameChange}
          onPasswordChange={handlePasswordChange}
        />

        <button onClick={handleSignup}>sign up</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isSignup: state.signup.isSignup,
  }),
  (dispatch) => ({
    SignupActions: bindActionCreators(signupActions, dispatch),
  })
)(Signup);
