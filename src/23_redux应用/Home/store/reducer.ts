import { IHomeAction, IHomeDispatchType, IHomeState } from "../../types";

import * as actionType from './constants'

const initialState = {
    title: '首页',
}

export default function reducer(state = initialState, action: IHomeAction): IHomeState {
    switch (action.type) {
        case actionType.CHANGE_HOME_TITLE as IHomeDispatchType:
            return { ...state, title: action.title }
        default:
           return state
    }
}
