import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchHomeMultidataAction } from '../store/creators'

interface IProps {
	fetchHomeMultidata: () => void
	homeList?: any[]
}

export class ReduxThunk extends PureComponent<IProps> {
	constructor(props: IProps) {
		super(props)
		this.props.fetchHomeMultidata()
	}
	render() {
		const { homeList } = this.props

		return (
			<div>
				<h1>ReduxThunk</h1>
				<ul>
					{homeList?.map((item, index) => {
						return <li key={index}>{item.title}</li>
					})}
				</ul>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch: any) => ({
	fetchHomeMultidata() {
        dispatch(fetchHomeMultidataAction())
    }
})

const mapStateToProps = (state: any) => ({
	homeList: state.homeList
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunk)
