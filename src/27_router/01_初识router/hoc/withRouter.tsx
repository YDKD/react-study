import React from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"

function WithRouter(WrapperComponent: React.ComponentType<any>) {
    return function(props: any) {
        const navigate = useNavigate()

        const params = useParams()

        const [searchParams] = useSearchParams()

        const query = Object.fromEntries(searchParams)

        const router = { navigate, params, query }

        return (
           <WrapperComponent {...props} router={router} />
        )
    }
}
export default WithRouter
