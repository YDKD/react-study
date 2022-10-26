import axios from 'axios'
import { TActionType } from '../types'
import { CHANGE_AGE, CHANGE_HOME_LIST, CHANGE_NAME } from './constants'

export const changeNameAction = (name: string) => ({
	type: CHANGE_NAME as TActionType,
	name
})

export const changeAgeAction = (age: number) => ({
	type: CHANGE_AGE as TActionType,
	age
})

const changeHomeListAction = (homeList: any[]) => ({
    type: CHANGE_HOME_LIST as TActionType,
    homeList
})


export const fetchHomeMultidataAction = () => {
	return (dispatch: any, getState) => {
		// 1. 发送网络请求
		// 2. 发送请求成功后，dispatch一个同步的action
        console.log('state', getState());
		
        axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
            const banners = res.data.data.banner.list
            dispatch(changeHomeListAction(banners))
        })
	}
}
