import React from 'react'
import { Card } from 'antd'

class Content extends React.Component {

  render () {
    return (
      <Card title='antd'>
        <h1>hello antd!</h1>
        <p>{this.props.msg}</p>
      </Card>
    )
  }
}

Content.propTypes = {
  msg: React.PropTypes.string.isRequired
}

export default Content
