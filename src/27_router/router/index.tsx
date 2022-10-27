import  { Navigate } from 'react-router-dom'
import React from 'react'


import About from '../views/About'
import Home from '../views/Home'
import HomeUserInfo from '../views/Home/UserInfo'
import HomeUserAvatar from '../views/Home/UserAvatar'
// import HomeUserProfile from '../views/Home/UserProfile'
const HomeUserProfile = React.lazy(() => import('../views/Home/UserProfile'))
const NotFound = React.lazy(() => import('../views/NotFound'))

/**
 * @description 路由配置
 */
export interface IRoute {
    path: string
    element: JSX.Element
    children?: IRoute[]
}

const routes: IRoute[] = [
    {
        path: '/',
        element: <Navigate to="/home" />,
    },
    {
        path: '/home',  
        element: <Home />,
        children: [
            {
                path: '/home',
                element: <Navigate to="/home/user-info" />,
            },
            {
                path: '/home/user-info',
                element: <HomeUserInfo />,
            },
            {
                path: '/home/user-avatar',
                element: <HomeUserAvatar />,
            },
            {
                path: '/home/user-profile/:id',
                element: <HomeUserProfile />,
            }
        ]
    },
    {
        path: '/about',  
        element: <About />
    },
    {
        path: '/404',
        element: <NotFound />
    },
    {
        path: '*',
        element: <Navigate to="/404" />
    }
]


export default routes
