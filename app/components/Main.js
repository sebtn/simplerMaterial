import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Main extends Component {
  render() {
   const { children } = this.props
    return (
      <div>
        <h1>This is Main using store and provider!</h1>
        {children}
      </div>
    )
  }
}

export default connect()(Main)