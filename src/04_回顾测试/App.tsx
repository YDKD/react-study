import { Component, ReactNode } from "react";
import Tabbar from "./components/TabBar";
import { IState } from "./types";



export class App extends Component<any, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            list: [
                {
                    id: 1,
                    title: '测试1'
                },
                {
                    id: 2,
                    title: '测试2'
                },
                {
                    id: 3,
                    title: '测试3'
                },
            ],
            currentIndex: 1
        }
    }

    changeIndex = (index: number) => {
        this.setState({
            currentIndex: index
        })
    }

    render(): ReactNode {
        const { list, currentIndex } = this.state
        return (
            <div>
                <Tabbar
                    list={list}
                    currentIndex={currentIndex}
                    changeIndex={this.changeIndex}
                ></Tabbar>
            </div>
        )
    }
}

export default App