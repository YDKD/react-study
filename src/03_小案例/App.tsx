import { useState } from "react";
import { Content } from "./components/Content";
import Tabbar from "./components/Tabbar"


function App() {
    const barList = [
        {
            label: '新款',
            value: 0
        },
        {
            label: '精选',
            value: 1
        },
        {
            label: '流行',
            value: 2
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="app">
            {/* tabbar */}
            <Tabbar barList={barList} changeCurrentIndex={(index) => setCurrentIndex(index)}/>

            <Content data={barList[currentIndex]}/>
        </div>
    )
}

export default App
