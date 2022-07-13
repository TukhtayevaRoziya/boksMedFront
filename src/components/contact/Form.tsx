import React from "react";
import { Button, Form, Input } from "antd";

import { instance } from "../../api/api";
import { ResType } from "../../types/ApiTypes";

import styles from './Form.module.css'

const MyForm: React.FC = () => {
  const onFinish = (values: any) => {
    instance.post("contact", values).then((res: ResType) => {
      console.log(res.data);
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
      <div className={styles.two__inp}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          className={styles.mini_inp}
        >
          <Input placeholder="Как вас зовут?!" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
          className={styles.mini_inp}
        >
          <Input placeholder="Email!" type={"tel"}/>
        </Form.Item>
      </div>

      <Form.Item
        name="message"
        rules={[{ required: true, message: "Please input your Message!" }]}
      >
        <Input placeholder="Сообщение!" />
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
