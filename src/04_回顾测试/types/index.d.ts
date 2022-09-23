export interface IListItem {
    id: number
    title: string
}

export interface IState {
    list: IListItem[],
    currentIndex: number
}