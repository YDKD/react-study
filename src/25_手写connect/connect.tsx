// connect接受2个参数
// 1. mapStateToProps
// 2. mapDispatchToProps

import { PureComponent } from 'react'
import store from './store'

// 返回一个函数
export default function connect(mapStateToProps, mapDispatchToProps) {
	return function (WrapperComponent) {
		// 返回的是一个高阶组件
		return class newComponent extends PureComponent {
            constructor(props) {
				super(props)
				this.state = mapStateToProps(store.getState())
			}

			componentDidMount(): void {
				this.unsubscribe = store.subscribe(() => {
					this.setState(mapStateToProps(store.getState()))
				})
			}

			componentWillUnmount(): void {
				this.unsubscribe()
			}

			render() {
                
                const mapState = mapStateToProps(store.getState())
                const mapDispatch = mapDispatchToProps(store.dispatch)

				return <WrapperComponent {...this.props} {...mapState} {...mapDispatch} />
			}
		}
	}
}
