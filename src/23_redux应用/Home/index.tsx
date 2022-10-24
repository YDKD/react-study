import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { IHomeAction, IHomeState } from '../types'
import { changeHomeTitleAction } from './store/creators'

interface IProps extends IHomeAction{}

interface IState extends IHomeState {}

export class index extends PureComponent<IProps, IHomeState> {
    homeSub: any
	constructor(props: IProps) {
		super(props)

        this.state = {
            title: store.getState().home.title
        }
	}

    componentDidMount(): void {
        // 1、创建监听
        this.homeSub = store.subscribe(() => {
            this.setState({
                title: store.getState().home.title
            })
        })
    }

    componentWillUnmount(): void {
        this.homeSub()
    }

    handleChangeHomeTitle(title: string) {
        // 开始派发action
        this.props.changeHomeTitle(title)
    }

	render() {
		const { title } = this.props

		return (
			<div>
				<div>Home组件</div>
				<h1>{title}</h1>
                <button onClick={() => this.handleChangeHomeTitle('zmy')}>change Home Title</button>
			</div>
		)
	}
}

const mapSateToProps = (state: any) => ({
	title: store.getState().home?.title
})

const mapDispatchToProps = (dispatch: any) => ({
    changeHomeTitle(title: string) {
        dispatch(changeHomeTitleAction(title))
    }
})

export default connect(mapSateToProps, mapDispatchToProps)(index)
