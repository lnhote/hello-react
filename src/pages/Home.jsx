import React from 'react'
import {Row} from 'antd'
import Layout from 'components/Layout'
import Head from 'components/Head'
import Nav from 'components/Nav'
import Content from 'components/Content'
import Footer from 'components/Footer'

class Home extends React.Component {

  constructor () {
    super()
    this.state = {
      msg: 'hello user '
    }
    this.addData = this.addData.bind(this)
  }

  addData (e) {
    this.setState({msg: 'hello user ' + e.target.value})
  }

  render () {
    return (
      <Layout>
        <Head name={this.props.name} />
        <Nav active_page='home' />
        <Row type='flex' justify='center' align='top' style={{margin: '24px'}}>
          Please enter your name：<input type='text' onChange={(e) => { this.addData(e) }} />
        </Row>
        <Content msg={this.state.msg} />
        <Footer />
      </Layout>
    )
  }
}

Home.propTypes = {
  name: React.PropTypes.string.isRequired
}

Home.defaultProps = {
  name: 'hello react'
}

export default Home
