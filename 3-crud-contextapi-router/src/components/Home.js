import React, { useContext } from "react";
import { Button, Statistic, Empty } from "antd";
import { ListUser } from "./ListUser";
import { Link } from "react-router-dom";
import "antd/dist/reset.css";
import { GlobalContext } from "../context/GlobalState";

export const Home = () => {
  const { users } = useContext(GlobalContext);

  return (
    <>
      <Statistic title="Total User Count" value={users && users.length} />
      <Link to="/create">
        <Button
          style={{ marginBlockStart: 16, marginBlockEnd: 32 }}
          type="primary"
        >
          Add New User
        </Button>
      </Link>
      {users && users.length > 0 ? <ListUser /> : <Empty />}
    </>
  );
};
