import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Space, Table, Button } from "antd";
import { Link } from "react-router-dom";
const { Column } = Table;

export const ListUser = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <Table dataSource={users} rowKey="id" pagination={false}>
      <Column
        title="Number"
        dataIndex="index"
        key="index"
        render={(_id, _user, index) => index + 1}
      />
      <Column title="User Name" dataIndex="name" key="name" />
      <Column
        title="Action"
        render={(_, user) => (
          <Space size="middle">
            <Link to={`/update/${user.id}`}>
              <Button type="primary">Edit</Button>
            </Link>
            <Button danger onClick={() => removeUser(user.id)}>
              Delete
            </Button>
          </Space>
        )}
      />
    </Table>
  );
};
