import React, { useState } from "react";
import { Button, Input, Space } from "antd";
import { SearchProps } from "./SearchProps";
export const SearchUser = ({ fetchUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  return (
    <div className="search-user">
      <Space>
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
