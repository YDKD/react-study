/**
 * @description: 首页的Store派发类型
 */
type IHomeDispatchType = 'changeHomeTitle' | 'changeHomeList'

/**
 * @description: 首页的State类型
 */
interface IHomeState {
    title: string
}

/**
 * @description: home的reducer
 */
interface IHomeAction {
    type: IHomeDispatchType
    title: string
    changeHomeTitle: (title: string) => void

}

export {
    IHomeDispatchType,
    IHomeAction,
    IHomeState
}
