import React, { useState, useEffect } from "react";
import { SearchUser } from "../../components/SearchUser";
import { User } from "../../components/User";
import { IUser } from "../../types/IUser";
import { UserService } from "../../api/GithubAPI";
import axios, { AxiosError } from "axios";
import { Col, Row } from "antd";
import { Spin } from "antd";

export const Home = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = function (userName: string) {
    setLoading(true);
    UserService.getUser(userName)
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        setLoading(false);
        setUser(null);
        console.log(err.message);
      });
    return () => {};
  };

  return (
    <Row>
      <Col span={20} offset={2}>
        <div>
          <SearchUser fetchUser={fetchUser} />
          {loading && <Spin />}
          {user && <User user={user} />}
        </div>
      </Col>
    </Row>
  );
};

export default Home;
