import { Link } from "react-router-dom";
import { Card, Descriptions, Badge } from "antd";
import { UserProps } from "./userProps";

const { Meta } = Card;
export const User = ({ user }: UserProps) => {
  return (
    <div>
      <div className="userInfo">
        <Descriptions title="User Info" bordered>
          <Descriptions.Item label="Name"> {user.name}</Descriptions.Item>
          <Descriptions.Item label="Company">{user.company}</Descriptions.Item>
          <Descriptions.Item label="Location">
            {user.location}
          </Descriptions.Item>
          <Descriptions.Item label="Followers">
            <Badge count={user.followers} showZero color="#faad14" />
          </Descriptions.Item>
          <Descriptions.Item label="Following">
            <Badge count={user.following} showZero color="#faad14" />
          </Descriptions.Item>
          <Descriptions.Item label="User Bio">{user.bio}</Descriptions.Item>
        </Descriptions>
      </div>
      <div className="userCard">
        <Link title="Go to repositories" to={`/repositories/${user.login}`}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={user.login} src={user.avatar_url} />}
          >
            <Meta title={user.login} description={user.name} />
          </Card>
        </Link>
      </div>
    </div>
  );
};
