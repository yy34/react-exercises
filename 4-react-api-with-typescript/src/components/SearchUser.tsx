import React, { useState } from "react";
import { Button, Input, Space } from "antd";

export const SearchUser = ({
  fetchUser,
}: {
  fetchUser: (userName: string) => Promise<void>;
}) => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <Space style={{ width: "100%" }}>
        <Input
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter a username"
        />
        <Button onClick={() => fetchUser(userName)} type="primary">
          Submit
        </Button>
      </Space>
    </div>
  );
};
