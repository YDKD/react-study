// 手写thunk中间件
// thunk中间件的核心就是针对action类型为函数进行判断
// 如果是函数就执行，如果不是就直接调用dispatch

const thunk = function(store) {
    // 1、保留原始的dispatch
    const next = store.dispatch
    // 2、创建一个函数，重写dispatch
    const dispatch = function(action) {
        // 判断action是否为函数
        if (typeof action === 'function') {
            // 执行action函数
            action(store.dispatch, store.getState)
        } else {
            // 调用原始的dispatch
            next(action)
        }
    }

    store.dispatch = dispatch
}

export default thunk
