import React from 'react'
import Layout from 'components/Layout'
import Head from 'components/Head'
import Nav from 'components/Nav'
import Content from 'components/Content'
import Footer from 'components/Footer'

export default class Contact extends React.Component {

  constructor () {
    super()
  }

  render () {
    return (
      <Layout>
        <Head name={'contact'} />
        <Nav active_page='contact' />
        <Content msg='contact page' />
        <Footer />
      </Layout>
    )
  }
}
