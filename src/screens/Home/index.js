//MODULES
import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom'

//ASSETS
// import logo from './logo.svg'
// import { Sidebar, Fragment, Menu, Image } from 'semantic-ui-react'
import LeftBar from '../../components/LeftBar'

//STYLES
// import styles from './css/index.scss'

//COMPONENTS
import Card from '../../components/Card'
import Table from '../../components/Table'

//COMPONENT
class App extends Component {
  render() {
    return (
      <Fragment>
        <LeftBar />
      </Fragment>
    )
  }
}

export default App
