import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { compose, bindActionCreators } from 'redux'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const muiTheme =  getMuiTheme({
  palette: {
  },
})
// const muiTheme = createMuiTheme()
const items = []
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

class Third extends Component {
  constructor(props) {
    super(props)
    this.state = {value: 10}
  }
    
  handleChange = (event, index, value) => this.setState({value})
  render () {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className="container">
      <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
        {items}
      </DropDownMenu>
      </div>
    </MuiThemeProvider>
    )
  }
}



export default compose(
  connect()
)(Third)

Third.propTypes = {
  theme: PropTypes.object.isRequired
}

