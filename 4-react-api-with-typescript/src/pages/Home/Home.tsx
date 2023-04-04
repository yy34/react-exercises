import React, { useState } from "react";
import { SearchUser } from "../../components/SearchUser";
import { IUser } from "../../types/IUser";
import { getUser } from "../../api/GithubAPI";

export const Home = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const fetchUser = async function (userName: string) {
    const data: any = await getUser(userName);
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
    <div>
      <SearchUser fetchUser={fetchUser} />
    </div>
  );
};

export default Home;
