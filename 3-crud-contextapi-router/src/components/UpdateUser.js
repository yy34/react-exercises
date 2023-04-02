import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Input, Space, Col, Row } from "antd";

export const UpdateUser = (props) => {
  const currentUserID = props.match.params.id;
  const { users, updateUser } = useContext(GlobalContext);
  const history = useHistory();
  const [form] = Form.useForm();

  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    let currentUser = users.find((user) => user.id === currentUserID);
    setSelectedUser(currentUser);
  }, [users, currentUserID]);

  const onFinish = () => {
    updateUser(selectedUser);
    history.push("/");
  };
  const changeName = (name) => {
    setSelectedUser({ ...selectedUser, name: name });
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <Row>
      <Col span={12} offset={6}>
        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          fields={[
            {
              name: ["name"],
              value: selectedUser.name,
            },
          ]}
        >
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input
              onChange={(e) => changeName(e.target.value)}
              placeholder="New User Name"
            />
          </Form.Item>
          <Form.Item>
            <Space size={10}>
              <Button type="primary" htmlType="submit">
                Update
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
