export type TActionType = 'change_name' | 'change_age'

export interface IAction {
	type: TActionType
	name?: string
	age?: number
}
