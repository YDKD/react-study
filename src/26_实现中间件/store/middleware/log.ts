// 中间件核心思想：使用 monkey patching（猴补丁），重写原有的dispatch方法

const log = function (store) {
	// 1、保留原始的dispatch
	const next = store.dispatch
	// 创建一个函数，重写dispatch
	/**
	 * @param {*} action dispatch的参数
	 * @return {*}
	 * @description:
	 * @author: YDKD
	 */
	const dispatch = function (action) {
		console.log('dispatch', action)
		// 2、调用原始的dispatch
		next(action)
		// 3、打印日志
		console.log('state', store.getState())
	}

	store.dispatch = dispatch
}

export default log
