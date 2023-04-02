import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Button, Form, Input, Space, Col, Row } from "antd";

export const CreateUser = () => {
  const { createUser } = useContext(GlobalContext);
  const history = useHistory();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const newUser = {
      id: uuidv4(),
      ...values,
    };
    createUser(newUser);
    history.push("/");
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Row>
      <Col span={6} offset={9}>
        <Form form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="New User Name" />
          </Form.Item>
          <Form.Item>
            <Space size={10}>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
              <Link to="/">
                <Button danger htmlType="button">
                  Cancel
                </Button>
              </Link>
            </Space>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
