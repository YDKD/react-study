import React, { PureComponent } from 'react'
import { WithRouter } from '../../../hoc'
import { IRouter } from '../../types'

interface IProps {
  router: IRouter
}

export class index extends PureComponent<IProps> {
  render() {
    const { query } = this.props.router
    return (
      <div>
        <h2>UserAvatar-</h2>
        <h2>query传参-{'id:'+ query.id + '-' +'name:' + query.name}</h2>
      </div>
    )
  }
}

export default WithRouter(index)
