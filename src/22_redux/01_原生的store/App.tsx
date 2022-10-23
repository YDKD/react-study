import React, { PureComponent } from 'react'
import { Unsubscribe } from 'redux'
import store from './store'
import { CHANGE_NAME } from './store/constants'
import { changeName } from './store/creators'

interface IState {
	name: string
	age: number
}

export class App extends PureComponent<any, IState> {
	unsubStore: Unsubscribe | undefined
	constructor(props: any) {
		super(props)

		this.state = {
			name: '',
			age: 0
		}
	}

	componentDidMount(): void {
		this.setState({
			name: store.getState().name
		})
		this.unsubStore = store.subscribe(() => {
			console.log('state', store.getState())
		})
	}

	changeName() {
		changeName('zs')

		this.setState({
			name: store.getState().name
		})

        this.unsubStore!()
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
