import React, { Component } from 'react'
import { Sidebar, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './css/leftBar.scss'

export default class LeftBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div className={styles.container} >
        <Sidebar 
          as={Menu} 
          visible   
          vertical 
          inverted 
          className={styles.wraper}>
          <Menu.Item 
            name='home' 
            active={activeItem === 'home'} 
            onClick={this.handleItemClick}>  
            <Link to={'/'} >
              <Image src={'/static/icon/dashboard.svg'} className={styles.image} inline verticalAlign='bottom'/>
              <span className={styles.span} >Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item 
            name='menu' 
            active={activeItem === 'menu'} 
            onClick={this.handleItemClick}>
            <Link to={'/'} >
              <Image src={'/static/icon/menu.svg'} className={styles.image} inline verticalAlign='bottom'/>
              <span className={styles.span} >Menu</span>
            </Link>
          </Menu.Item>
          <Menu.Item 
            name='report' 
            active={activeItem === 'report'} 
            onClick={this.handleItemClick}>
            <Link to={'#'} >
              <Image src={'/static/icon/report.svg'} className={styles.image} inline verticalAlign='bottom'/>  
              <span className={styles.span} >Report</span>
            </Link>
          </Menu.Item>
          <Menu.Item 
            name='settings' 
            active={activeItem === 'settings'} 
            onClick={this.handleItemClick}>
            <Link to={'#'} >
              <Image src={'/static/icon/settings.svg'} className={styles.image} inline verticalAlign='bottom'/>  
              <span className={styles.span} >Settings</span>
            </Link>
          </Menu.Item>
          <Menu.Item 
            name='logout' 
            active={activeItem === 'logout'} 
            onClick={this.handleItemClick}>
            <Link to={'#'} >
              <Image src={'/static/icon/logout.svg'} className={styles.image} inline verticalAlign='bottom'/>  
              <span className={styles.span} >Logout</span>
            </Link>
          </Menu.Item>
        </Sidebar>

      </div>
    )
  }
}