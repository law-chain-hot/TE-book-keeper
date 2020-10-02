import React, { useRef } from 'react'


import { addVendor } from '../utils/storage'
import uniqid from 'uniqid'


import { Form, Input, InputNumber, Button } from 'antd';
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

const AntForm = () => {
  const reset = useRef(null)
  const onFinish = (values) => {
    values.user.id = uniqid()
    console.log(values);
    addVendor(values.user)
    reset.current.resetFields()
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} labelAlign='right' ref={reset}>
      <Form.Item
        name={['user', 'companyName']}
        label="Company Name"
        rules={[
          {
            required: true,
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'part']}
        label="Part"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'priceUnit']}
        label="Price/Unit"
      >
        <Input />
      </Form.Item>


      <Form.Item
        name={['user', 'address1']}
        label="Address 1"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'address2']}
        label="Address 2"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'city']}
        label="City"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'state']}
        label="State"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'zipCode']}
        label="Zip Code"
      >
        <Input />
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