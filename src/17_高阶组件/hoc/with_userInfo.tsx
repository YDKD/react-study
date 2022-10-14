import UserContext from "../context/with_user";
import { IUserInfo } from "../types";

function withUserInfo(OriginComponent: React.ComponentType<any>) {
  return (props: any) => {
    return (
      <UserContext.Consumer>
        {(value: IUserInfo) => {
          return <OriginComponent {...value} {...props}  />;
        }}
      </UserContext.Consumer>
    );
  };
}

export default withUserInfo;
