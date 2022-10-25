import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { decrement, fectHomeAction, increment } from '../store/features/counter/counterSlice'

interface IProps {
	count: number
  incrementCount: (num: number) => void
  decrementCount: (num: number) => void
  fectHomeAction: () => void
}

export class user extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  componentDidMount(): void {
    this.props.fectHomeAction()
  }

  increment(num: number) {
    this.props.incrementCount(num)
  }

  decrement(num: number) {
    this.props.decrementCount(num)
  }

	render() {
		const { count } = this.props
		return (
			<>
				<div>{count}</div>
				<button onClick={() => this.increment(1)}>+1</button>
				<button onClick={() => this.increment(5)}>+5</button>
				<button onClick={() => this.increment(10)}>+10</button>
        <br />
				<button onClick={() => this.decrement(1)}>-1</button>
				<button onClick={() => this.decrement(5)}>-5</button>
				<button onClick={() => this.decrement(10)}>-10</button>
			</>
		)
	}
}

const mapStateToProps = (state: any) => ({
	count: state.counter.count
})

const mapStateToDispatch = (dispatch: any) => ({
  incrementCount(num: number) {
    dispatch(increment(num))
  },
  decrementCount(num: number) {
    dispatch(decrement(num))
  },
  fectHomeAction() {
    dispatch(fectHomeAction())
  }
})

export default connect(mapStateToProps, mapStateToDispatch)(user)
