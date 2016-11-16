import React from 'react'
import {Card, Col, Row} from 'antd'

class Content extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Card title='antd'>
        <h1>hello antd!</h1>
        <p>{this.props.msg}</p>
      </Card>
    )
  }
}
export default Content
