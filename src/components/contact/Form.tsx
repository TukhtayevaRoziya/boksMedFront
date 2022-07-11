import React from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';

const MyForm: React.FC = () => {

  const onFinish = (values: any) => {
    axios
    .post("https://boksmed.herokuapp.com/api/contact", values, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((res: any) => {
      if (res.data === 'Ok!') {
        alert('Send your message!')
      }else{
        alert('Some error!')
      }
    });

    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder='Username!'/>
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input placeholder='Email!'/>
      </Form.Item>
      <Form.Item
        name="message"
        rules={[{ required: true, message: 'Please input your Message!' }]}
      >
        <Input placeholder='Message!'/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;