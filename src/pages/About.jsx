import React from 'react'
import {Row} from 'antd'
import Layout from 'components/Layout'
import Head from 'components/Head'
import Nav from 'components/Nav'
import Content from 'components/Content'
import Footer from 'components/Footer'

class About extends React.Component {

  constructor () {
    super()
  }
  render () {
    return (
      <Layout>
        <Head name={'About'} />
        <Nav active_page='about' />
        <Content msg={'About page'} />
        <Footer />
      </Layout>
    )
  }
}

export default About
