import React, { PureComponent } from 'react'
import { Unsubscribe } from 'redux'
import store from '../store/index'
import { changeNameAction } from '../store/creators'

interface IState {
	name: string
	age: number
}

export class App extends PureComponent<any, IState> {
	unsubStore: Unsubscribe | undefined
	constructor(props: any) {
		super(props)

		this.state = {
			name: store.getState().name,
			age: store.getState().age
		}
	}

	componentDidMount(): void {
		this.unsubStore = store.subscribe(() => {
			this.setState({
				name: store.getState().name
			})
		})
	}

	changeName() {
		store.dispatch(changeNameAction('zs'))
	}

	render() {
		const { name, age } = this.state

		return (
			<>
				<div>
					姓名：{name} 年龄：{age}
				</div>
				<button onClick={() => this.changeName()}>Change Name</button>
			</>
		)
	}
}

export default App
