import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
});
