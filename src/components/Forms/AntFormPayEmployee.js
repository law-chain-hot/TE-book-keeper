import React, { useRef } from 'react'


import { payByID } from '../../utils/storage'


import { Form, Input, InputNumber, Button, Select } from 'antd';
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const AntForm = (props) => {
  const reset = useRef(null)
  const onFinish = (values) => {
    console.log(values);
    payByID(values.user.id)
    reset.current.resetFields()
  };

  const Options = props.employees.map(employee => {
    return (
      <Select.Option key={employee.id} value={employee.id}>{employee.firstName || null} {employee.lastName || null}</Select.Option>
    )
  })

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} labelAlign='right' ref={reset}>
      <Form.Item 
        name={['user', 'id']}
        label="Employees">
        <Select>
          {Options}
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AntForm