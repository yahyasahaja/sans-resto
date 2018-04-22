//MODULES
import React, { Component, Fragment } from 'react'

//ASSETS

//STYLES
import styles from './css/index.scss'

//COMPONENTS
import LeftBar from '../../components/LeftBar'
import TopBar from '../../components/TopBar'

export default class Menu extends Component {
  render () {
    return (
      <Fragment className={styles.container}>
        <TopBar />
        <LeftBar />
      </Fragment>
    )
  }
}