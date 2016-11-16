import React from 'react'

class Header extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    var myStyle = {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FF0000',
      textAlign: 'center'
    }

    return (
      <div>
        <h1 style={myStyle}>Welcome, {this.props.name}</h1>
      </div>
        )
  }
}
export default Header
