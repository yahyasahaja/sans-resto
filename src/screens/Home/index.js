//MODULES
import React, { Component, Segment } from 'react'
// import { Link } from 'react-router-dom'

//ASSETS
// import logo from './logo.svg'
// import { Sidebar, Segment, Menu, Image } from 'semantic-ui-react'
import LeftBar from '../../components/LeftBar'

//STYLES
// import styles from './css/index.scss'

//COMPONENT
class App extends Component {
  render() {
    return (
      <Segment>
        <LeftBar />
      </Segment>
    )
  }
}

export default App
