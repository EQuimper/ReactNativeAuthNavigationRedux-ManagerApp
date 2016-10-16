import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
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
  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button onPress={() => this.loginPress()}>
        Login
      </Button>
    );
  }
  render() {
    return (
      <Card>

        <CardSection>
          <Input
            autoCapitalize="none"
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

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

export default connect(
  state => {
    const { email, password, error, loading } = state.auth;
    return {
      email,
      password,
      error,
      loading
    };
  },
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
