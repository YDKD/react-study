// 编写 applyMiddleware 函数

function applyMiddleware(store, ...args) {
	args.forEach(middleware => {
		middleware(store)
	})
}

export default applyMiddleware
