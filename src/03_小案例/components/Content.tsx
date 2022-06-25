import { IBarListItem } from "../types"

interface IProps {
    data: IBarListItem
}

export function Content(props: IProps) {
    const { data } = props
    return (
        <div className="page-content">{ data.label }</div>
    )
}
