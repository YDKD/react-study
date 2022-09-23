import { Component, ReactNode } from "react";
import { IListItem } from "../types";

interface IProps {
    list: IListItem[]
    currentIndex: number
    changeIndex: (index: number) => void
}

// 第一个是 props的类型，第二个是state的类型
export class Tabbar extends Component<IProps, any> {
    constructor(props: IProps) {
        super(props)
    }

    change(id: number) {
        this.props.changeIndex(id)
    }

    render(): ReactNode {
        const { list, currentIndex, changeIndex } = this.props
        return (
            <div className="tab-bar">
                {
                    list.map((item) => {
                        return <div
                            className={'tab-bar-item ' + '' + `${item.id == currentIndex ? 'acitve' : ''}`}
                            key={item.id}
                            onClick={() => this.change(item.id)}
                        >{item.title}</div>
                    })
                }
            </div>
        )
    }
}

export default Tabbar