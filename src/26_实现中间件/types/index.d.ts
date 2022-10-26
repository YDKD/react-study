export type TActionType = 'change_name' | 'change_age' | 'change_home_list'

export interface IAction {
	type: TActionType
	name?: string
	age?: number
    homeList?: any[]
}
