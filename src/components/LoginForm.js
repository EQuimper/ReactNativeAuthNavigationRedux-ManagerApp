import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
      <View style={styles.constainerStyle}>
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

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSection>
            <Button onPress={() => this.loginPress()}>
              Login
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default connect(
  state => {
    const { email, password, error } = state.auth;
    return {
      email,
      password,
      error
    };
  },
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);

const styles = {
  constainerStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
