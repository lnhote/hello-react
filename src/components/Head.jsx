import React from 'react'

class Head extends React.Component {

  render () {
    var header_style = {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FF0000',
      textAlign: 'center'
    }

    return (
      <h1 style={header_style}>Welcome, {this.props.name}</h1>
    )
  }
}

Head.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default Head
