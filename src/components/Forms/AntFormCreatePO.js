import React, { useRef } from 'react'


import { creatPO } from '../../utils/storage'


import { Form, Input, InputNumber, Button, Select } from 'antd';
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 8,
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
    creatPO(values.user)
    reset.current.resetFields()
  };

  const Options = props.vendors.map(vendors => {
    return (
      <Select.Option key={vendors.id} value={vendors.id}>{vendors.part}</Select.Option>
    )
  })

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} labelAlign='right' ref={reset}>
      <Form.Item
        name={['user', 'id']}
        label="Part"
        rules={[{ required: true }]}
      >
        <Select>
          {Options}
        </Select>
      </Form.Item>

      <Form.Item
        name={['user', 'number']}
        label="Quantity"
        rules={[{ required: true }]}
      >
        <InputNumber />
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