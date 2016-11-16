import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router'

const Nav = React.createClass({

  getInitialState () {
    return {
      current: this.props.active_page
    }
  },

  handleClick (e) {
    this.setState({
      current: e.key
    })
  },

  render () {
    return (
      <Menu mode='horizontal'
        selectedKeys={[this.state.current]}
        onClick={this.handleClick}
      >
        <Menu.Item key='home'>
          <Link to='/home'><Icon type='home' />Home</Link>
        </Menu.Item>
        <Menu.Item key='about'>
          <Link to='/about'><Icon type='user' />About</Link>
        </Menu.Item>
        <Menu.Item key='contact'>
          <Link to='/contact'><Icon type='message' />Contact</Link>
        </Menu.Item>
        <Menu.Item key='news'>
          <Link to='/news'><Icon type='bars' />News</Link>
        </Menu.Item>
      </Menu>
    )
  }
})

Nav.propTypes = {
  active_page: React.PropTypes.string.isRequired
}

export default Nav
