import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeAgeAction } from '../store/creators'
import { IAction } from '../types'

interface IProps extends IAction {
	changeAge: (age: number) => IAction
}

export class App extends PureComponent<IProps> {
	handleChangeAge() {
		this.props.changeAge(20)
	}

	render() {
		const { age } = this.props
		return (
			<Fragment>
				<div>年龄：{age}</div>
				<button onClick={() => this.handleChangeAge()}>change age</button>
			</Fragment>
		)
	}
}

const mapStateToProps = (state: any) => ({
	age: state.age
})

const mapDispatchToProps = (dispatch: any) => ({
	changeAge(age: number) {
		dispatch(changeAgeAction(age))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
