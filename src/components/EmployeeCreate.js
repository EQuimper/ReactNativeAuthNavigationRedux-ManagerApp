import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

const shiftArr = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

class EmployeeCreate extends Component {
  render() {
    const { name, phone, shift } = this.props;
    return (
      <Card>

        <CardSection>
          <Input
            onChangeText={value => this.props.employeeUpdate({
              prop: 'name',
              value
            })}
            label="Name"
            placeholder="Jane"
            value={name}
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={value => this.props.employeeUpdate({
              prop: 'phone',
              value
            })}
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
          />
        </CardSection>

        <CardSection>
          <Picker
            style={{ flex: 1 }} // need it for display
            selectedValue={shift}
            onValueChange={value => this.props.employeeUpdate({
              prop: 'shift',
              value
            })}
          >
            {shiftArr.map((item, i) => (
              <Picker.Item key={i} label={item} value={item} />
            ))}
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Create</Button>
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
  { employeeUpdate }
)(EmployeeCreate);
