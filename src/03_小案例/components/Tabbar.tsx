import { useState } from "react";
import { IBarListItem } from "../types";

interface IProps {
    barList: IBarListItem[]
    changeCurrentIndex: (num: number) => void
}

export default function Tabbar(props: IProps) {
    const { barList, changeCurrentIndex } = props;
    const [currentIndex, setCurrentIndex] = useState(0);

    function setIndex(index: number) {
        setCurrentIndex(index)
        changeCurrentIndex(index)
    }

    return (
        <div className="bar-list">
            {barList.map((item, index) => {
                return (
                    <div className={"bar-list-item " + (index == currentIndex ? "active" : "")} key={item.label} onClick={() => setIndex(index)}>
                        <span> {item.label}</span>
                    </div>
                );
            })}
        </div>
    );
}
