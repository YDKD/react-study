import React from "react"
import { useNavigate } from "react-router-dom"

function WithRouter(WrapperComponent: React.ComponentType) {
    return function(props: any) {
        const router = useNavigate()
        return (
           <WrapperComponent {...props} router={router} />
        )
    }
}
export default WithRouter
