import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
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

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
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

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};
