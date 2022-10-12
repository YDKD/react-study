import React, { PureComponent } from "react";

interface IState {
  username: string;
  password: string;
}

export class App extends PureComponent<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  showForm() {
    const { username, password } = this.state;
    console.log(`username: ${username}, password: ${password}`);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<IState, keyof IState>);
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <label htmlFor="username">
          用户名：
          <input id="username" type="text" name="username" value={username} onChange={(e) => this.handleInputChange(e)} />
        </label>

        <br />

        <label htmlFor="password">
          密码：
          <input id="password" type="password" name="password" value={password} onChange={(e) => this.handleInputChange(e)} />
        </label>

        <br />

        <button onClick={() => this.showForm()}>Submit</button>
      </div>
    );
  }
}

export default App;
