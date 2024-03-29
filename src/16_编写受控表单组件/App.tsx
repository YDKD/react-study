import React, { PureComponent } from "react";

interface ISex {
  label: string;
  value: boolean;
}

interface IState {
  username: string;
  password: string;
  agree: boolean;
  sex: ISex[];
  selectPhone: string[];
}

export class App extends PureComponent<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      username: "",
      password: "",
      agree: false,
      sex: [
        {
          label: "男",
          value: false,
        },
        {
          label: "女",
          value: true,
        },
      ],
      selectPhone: ['iphone12']
    };
  }

  showForm() {
    const { username, password, agree } = this.state;
    console.log(`username: ${username}, password: ${password}, agree: ${agree}`);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    this.setState({ [name]: value } as unknown as Pick<IState, keyof IState>);
  }

  handleCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;
    this.setState({ [name]: checked } as unknown as Pick<IState, keyof IState>);
  }

  handleRadioChange(e: React.ChangeEvent<HTMLInputElement>, currentIndex: number) {
    const { checked } = e.target;
    console.log("checked", checked);
    const sex = [...this.state.sex].map((item, index) => {
      if (index == currentIndex) {
        item.value = checked;
      } else {
        item.value = false;
      }

      return item;
    });

    this.setState({ sex: sex });
  }

  handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { selectedOptions } = e.target
    const values = Array.from(selectedOptions, (item) => item.value)
    
    this.setState({
      selectPhone: values
    })
  }

  render() {
    const { username, password, agree, sex, selectPhone } = this.state;
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
        <label htmlFor="agree">
          <input id="agree" name="agree" type="checkbox" checked={agree} onChange={(e) => this.handleCheckChange(e)} />
          同意协议
        </label>
        <br />
        性别：
        {sex.map((item, index) => {
          return (
            <label htmlFor={item.label} key={index}>
              <input type="radio" id={item.label} name="sex" checked={item.value} onChange={(e) => this.handleRadioChange(e, index)} /> {item.label}
            </label>
          );
        })}
        <br />

        <div>
          手机：
          <select multiple value={selectPhone} onChange={(e) => this.handleSelectChange(e)}>
            <option value="iphone12">iphone12</option>
            <option value="iphone13">iphone13</option>
            <option value="iphone14">iphone14</option>
          </select>
        </div>

        <button onClick={() => this.showForm()}>Submit</button>
      </div>
    );
  }
}

export default App;
