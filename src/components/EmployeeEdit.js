import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  state => {
    const { name, phone, shift } = state.employeeForm;

    return {
      name,
      phone,
      shift
    };
  },
  { employeeUpdate, employeeSave }
)(EmployeeEdit);
