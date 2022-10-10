import React, { Component } from "react";

interface IProps {
  count: number;
}

export class Profile extends Component<IProps> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps: IProps, nextState: Readonly<{}>, nextContext: any): boolean {
    if (nextProps.count === this.props.count) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    console.log("Profile 更新了");

    return <div>Profile</div>;
  }
}

export default Profile;
