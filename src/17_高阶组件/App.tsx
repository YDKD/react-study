import React, { PureComponent } from "react";
import withUserInfo from "./hoc/with_userInfo";
import { IUserInfo } from "./types";

type IProps = {
  sex: string;
} & IUserInfo;

class Profile extends PureComponent<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  render(): React.ReactNode {
    const { name, age, sex } = this.props;
    return (
      <div>
        <h1>姓名：{name}</h1>
        <h1>年龄：{age}</h1>
        <h1>性别：{sex}</h1>
      </div>
    );
  }
}

const WithProfileComponent = withUserInfo(Profile);

export class App extends PureComponent {
  render() {
    return (
      <div>
        <WithProfileComponent sex="男" />
      </div>
    );
  }
}

export default App;
