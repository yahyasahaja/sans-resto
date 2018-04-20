//MODULES
import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

//STYLES
import styles from './css/topBar.scss'

//COMPONENT
export default class TopBar extends Component {
  render() {
    return (
      <div className={styles.container}>  
        <div className={styles.left} >
          SANS APP
        </div>
        <div className={styles.right} >
          <Image src='/static/icon/notification.svg' className={styles.notif} inline />
          <Image src='/static/icon/profile.svg' avatar />
          <span>Zain Fikri Hanastyono</span>
        </div>
      </div>
    )
  }
}