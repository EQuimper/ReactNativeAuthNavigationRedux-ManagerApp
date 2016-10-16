import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  render() {
    const { name, phone, shift } = this.props;
    return (
      <Card>

        <EmployeeForm {...this.props} />

        <CardSection>
          <Button
            onPress={() => this.props.employeeCreate({
              name,
              phone,
              shift: shift || 'Monday'
            })}
          >
            Create
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
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
