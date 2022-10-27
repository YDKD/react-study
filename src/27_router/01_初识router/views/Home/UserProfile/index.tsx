import React, { PureComponent } from 'react'
import { WithRouter } from '../../../hoc';
import { IRouter } from '../../types';

interface IProps {
  router: IRouter
}


export class index extends PureComponent<IProps> {
  render() {
    const { params } = this.props.router
    return (
      <div>
        <h2>Profile</h2>
        <h2>params传参:{params.id}</h2>
      </div>
    )
  }
}

export default WithRouter(index)
