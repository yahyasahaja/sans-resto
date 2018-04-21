import React, { Component } from 'react'
import { Sidebar, Menu, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import styles from './css/leftBar.scss'

class LeftBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick(link, e, activeItem) {
    e.preventDefault()
    this.props.history.push(link)
    this.setState({activeItem})
  }

  render() {
    let { activeItem } = this.state
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
            onClick={this.handleItemClick.bind(this, '/home')}>  
            <div  >
              <Image src={'/static/icon/dashboard.svg'} className={styles.image} inline verticalAlign='bottom'/>
              <span className={styles.span} >Dashboard</span>
            </div>
          </Menu.Item>
          <Menu.Item 
            name='menu' 
            active={activeItem === 'menu'} 
            onClick={this.handleItemClick.bind(this, '/menu')}>
            <div  >
              <Image src={'/static/icon/menu.svg'} className={styles.image} inline verticalAlign='bottom'/>
              <span className={styles.span} >Menu</span>
            </div>
          </Menu.Item>
          <Menu.Item 
            name='report' 
            active={activeItem === 'report'} 
            onClick={this.handleItemClick.bind(this, '/report')}>
            <div to={'#'} >
              <Image src={'/static/icon/report.svg'} className={styles.image} inline verticalAlign='bottom'/>  
              <span className={styles.span} >Report</span>
            </div>
          </Menu.Item>
          <Menu.Item 
            name='settings' 
            active={activeItem === 'settings'} 
            onClick={this.handleItemClick.bind(this, '/settings')}>
            <div to={'#'} >
              <Image src={'/static/icon/settings.svg'} className={styles.image} inline verticalAlign='bottom'/>  
              <span className={styles.span} >Settings</span>
            </div>
          </Menu.Item>
          <Menu.Item 
            name='logout' 
            active={activeItem === 'logout'} 
            onClick={this.handleItemClick.bind(this, '/logout')}>
            <div to={'#'} >
              <Image src={'/static/icon/logout.svg'} className={styles.image} inline verticalAlign='bottom'/>  
              <span className={styles.span} >Logout</span>
            </div>
          </Menu.Item>

          <div className={styles.bottom} >
            <div className={styles.support}>
              <Image className={styles.imgSupport} src="/static/icon/support.svg"  inline verticalAlign='bottom' />
              <span className={styles.title} >Support</span>
            </div>
            <div className={styles.text}>
              <span>customer@sans.id</span>
              <div>+62 85851851276</div>
            </div>
            <div>
              <a className={styles.customer} href="customer.sans.id" >customer.sans.id</a>
            </div>
          </div>
        </Sidebar>

      </div>
    )
  }
}

export default withRouter(LeftBar)