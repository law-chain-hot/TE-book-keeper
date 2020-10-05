import React, { useRef } from 'react'


import { addVendor, getInventory } from '../../utils/storage'
import uniqid from 'uniqid'
// import mapTitle from '../../utils/mapTitle'
import mapTitle from '../../utils/mapTitle'



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
    values.user.id = uniqid()
    console.log(values);
    addVendor(values.user)
    reset.current.resetFields()
  };

  const inventory = getInventory()
  const Options = inventory.map(inventory => {
    return (
      <Select.Option key={inventory.part} >{inventory.part}</Select.Option>
    )
  })

  const formItems = props.items.map(item => {
    if (item.name === 'priceUnit') {
      return (
        <Form.Item
          name={['user', item.name]}
          label={mapTitle[item.name]}
          rules={[
            {
              required: true,
            }
          ]}
        >
          <Input type='number' />
        </Form.Item>
      )
    }
    else if (item.name === 'part') {
      return (
        <Form.Item
          name={['user', 'part']}
          label="Part"
          rules={[{ required: true }]}
        >
          <Select>
            {Options}
          </Select>
        </Form.Item>

      )
    }
    else {
      return (
        <Form.Item
          name={['user', item.name]}
          label={mapTitle[item.name]}
          rules={[
            {
              required: true,
            }
          ]}
        >
          <Input />
        </Form.Item>
      )
    }
  })

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} labelAlign='right' ref={reset}>

      {formItems}

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AntForm