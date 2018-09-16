import React from 'react';
import Form from 'r-form';

const DropDown = ({ name, value, options, validator}) => (
  <Form.Input name={name}>
    {(form) => {
      return (
        <select
          name={name}
          value={form.get() || Object.keys(options)[0]}
          onChange={(e) => {
            e.preventDefault();
            form.update(e.target.value);
          }}
        >
          { Object.keys(options).map(op => <option key={op} value={op}> {options[op]} </option> )}
        </select>
      );
    }}
  </Form.Input>
);


export default DropDown;
