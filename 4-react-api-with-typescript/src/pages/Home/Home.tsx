import React, { useState } from "react";
import { SearchUser } from "../../components/SearchUser";
import { User } from "../../components/User";
import { IUser } from "../../types/IUser";
import { getUser } from "../../api/GithubAPI";
import { Col, Row } from "antd";
import { Spin } from "antd";
export const Home = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async function (userName: string) {
    setLoading(true);
    const data: any = await getUser(userName);
    setLoading(false);
    const {
      login,
      name,
      avatar_url,
      company,
      location,
      email,
      bio,
      followers,
      following,
    } = data;
    const userData: IUser = {
      login,
      name,
      avatar_url,
      company,
      location,
      email,
      bio,
      followers,
      following,
    };
    setUser(userData);
  };

  return (
    <Row>
      <Col span={20} offset={2}>
        <div>
          <SearchUser fetchUser={fetchUser} />
          {loading && <Spin />}
          {user && <User {...user} />}
        </div>
      </Col>
    </Row>
  );
};

export default Home;
