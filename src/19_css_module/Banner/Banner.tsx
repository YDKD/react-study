import React, { PureComponent } from 'react'
import bannerStyle from './Banner.module.css'

export class index extends PureComponent {
  render() {
    return (
      <div className={bannerStyle.title}>Banner</div>
    )
  }
}

export default index
