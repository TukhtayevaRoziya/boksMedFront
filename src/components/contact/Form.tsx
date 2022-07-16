import React from "react";
import { Button, Form, Input } from "antd";

import { instance } from "../../api/api";
import { ResType } from "../../types/ApiTypes";

import styles from "./Form.module.css";

const MyForm: React.FC = () => {
  const onFinish = (values: any) => {
    instance.post("contact", values).then((res: ResType) => {
      // console.log(res.data);
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log("Failed:", errorInfo);
  };

  const data = [
    {
      id: 1,
      name: "username",
      message: "Please input your username!",
      placeholder: "Как вас зовут?!",
    },
    {
      id: 2,
      name: "email",
      message: "Please input your email!",
      placeholder: "Email!",
    },
    {
      id: 3,
      name: "message",
      message: "Please input your username!",
      placeholder: "Сообщение!",
    },
  ];

  const dataMap = data.map((d) => (
    <Form.Item key={d.id}
      name={d.name}
      rules={[{ required: true, message: d.message }]}
      className={styles.mini_inp}
    >
      <Input placeholder={d.placeholder} />
    </Form.Item>
  ));

  return (
    <>
      <div className={styles.hr} />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className={styles.two__inp}>{dataMap}</div>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default MyForm;
