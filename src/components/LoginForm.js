import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(email) {
    this.props.emailChanged(email);
  }
  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }
  loginPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={email => this.onEmailChange(email)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.password}
            label="Password"
            secureTextEntry
            placeholder="password"
            onChangeText={text => this.onPasswordChanged(text)}
          />
        </CardSection>
        <CardSection>
          <Button onPress={() => this.loginPress()}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  state => ({
    email: state.auth.email,
    password: state.auth.password
  }),
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
