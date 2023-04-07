import { useState, useEffect } from "react";
import { IRepo } from "../../types/IRepo";
import { UserService } from "../../api/GithubAPI";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { Repo } from "../../components/Repo";
import { Spin } from "antd";

export const RepoInfos = () => {
  const { username } = useParams();
  const [loading, setLoading] = useState(false);
  const [repoList, setRepoList] = useState<IRepo[] | [] | null>(null);

  useEffect(() => {
    const fetchUser = function (userName: string) {
      setLoading(true);
      UserService.getRepos(userName)
        .then((data) => {
          setRepoList(data);
          setLoading(false);
        })
        .catch((err: AxiosError) => {
          setLoading(false);
        });
      return () => {};
    };
    username && fetchUser(username);
  }, []);
  return (
    <div>
      {loading && <Spin />}
      {repoList && repoList.length > 0 && (
        <div className="repoList">
          {repoList.map((repo: IRepo) => (
            <Repo key={repo.name} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
};
