import React, { PureComponent } from 'react'
import classnames from 'classnames'

interface IState {
	isaaa: boolean
}

export class App extends PureComponent<any, IState> {
	constructor(props: any) {
		super(props)

		this.state = {
			isaaa: true
		}
	}
	render() {
		const { isaaa } = this.state
		return <div className={classnames('test', { isaaa: isaaa })}>App</div>
	}
}

export default App
