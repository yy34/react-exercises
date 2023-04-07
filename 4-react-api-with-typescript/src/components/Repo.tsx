import { Badge, List, Space, Divider, notification } from "antd";
import { IRepo } from "../types/IRepo";

interface RepoProps {
  repo: IRepo;
}

export const Repo: React.FC<RepoProps> = ({ repo }: RepoProps) => {
  const cloneProject = (cloneUrl: any) => {
    navigator.clipboard.writeText(cloneUrl);
    showNotification("Clone link copied", cloneUrl);
  };
  const showNotification = (message: any, cloneUrl: any) => {
    notification.success({
      message: message,
      description: cloneUrl,
      placement: "topLeft",
    });
  };
  return (
    <div>
      <div className="repoInfo">
        <List
          itemLayout="horizontal"
          dataSource={[repo]}
          renderItem={(item, index) => (
            <>
              <Divider className="repoName" orientation="center"></Divider>
              <Space>
                <small>Forks</small>
                {item.forks_count}
                <small>Stars</small>
                {item.stargazers_count}
                <small>Language</small>
                {item.language}
                <small>Last Updated</small>
                {item &&
                  item.updated_at &&
                  new Date(item.updated_at).toLocaleDateString()}
              </Space>

              <List.Item
                actions={[
                  <a
                    onClick={() => cloneProject(item.clone_url)}
                    target="_blank"
                    key="list-loadmore-clone"
                  >
                    Clone
                  </a>,
                  <a
                    href={item.clone_url}
                    target="_blank"
                    key="list-loadmore-repo"
                  >
                    Go to Repo
                  </a>,
                ]}
              >
                <List.Item.Meta
                  title={item.name}
                  description={item.description}
                />
              </List.Item>
            </>
          )}
        />
      </div>
    </div>
  );
};
