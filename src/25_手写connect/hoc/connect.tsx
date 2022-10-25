// connect接受2个参数
// 1. mapStateToProps
// 2. mapDispatchToProps

import { PureComponent } from 'react'
import HocContext from './context';
// import store from '../store'

// 返回一个函数
export default function connect(mapStateToProps, mapDispatchToProps) {
	return function (WrapperComponent) {
		// 返回的是一个高阶组件
		 class newComponent extends PureComponent {
            constructor(props, context) {
				super(props)
				
				this.state = mapStateToProps(context.getState())
			}

			componentDidMount(): void {
				this.unsubscribe = this.context.subscribe(() => {
					this.setState(mapStateToProps(this.context.getState()))
				})
			}

			componentWillUnmount(): void {
				this.unsubscribe()
			}

			render() {
                
                const mapState = mapStateToProps(this.context.getState())
                const mapDispatch = mapDispatchToProps(this.context.dispatch)

				return <WrapperComponent {...this.props} {...mapState} {...mapDispatch} />
			}
		}

		newComponent.contextType = HocContext

		return newComponent
	}
}
