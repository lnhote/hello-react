import React from 'react'
import {Col, Row} from 'antd'

class Layout extends React.Component {

  render () {
    return (
      <div className='normal'>
        <Row >
          <Col span={16} offset={4}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    )
  }
}

Layout.propTypes = {
  children: React.PropTypes.node
}

export default Layout
