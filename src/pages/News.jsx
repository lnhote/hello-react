import React from 'react'
import Layout from 'components/Layout'
import Head from 'components/Head'
import Nav from 'components/Nav'
import Content from 'components/Content'
import Footer from 'components/Footer'

export default class News extends React.Component {

  constructor () {
    super()
  }

  render () {
    return (
      <Layout>
        <Head name={'News'} />
        <Nav active_page='news' />
        <Content msg={'News page'} />
        <Footer />
      </Layout>
    )
  }
}
