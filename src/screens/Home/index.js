//MODULES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//ASSETS
// import logo from './logo.svg'
import { Sidebar, Segment, Menu, Icon, Image } from 'semantic-ui-react'

//STYLES
// import styles from './css/index.scss'

//COMPONENT
class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state

    return (
      <Segment>
        {/* <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Sidebar as={Menu} animation='overlay' visible width='thin' icon='labeled' vertical>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
            <Link to={'#'} >
              <Image src={'/static/icon/dashboard.svg'} style={{ width: '18px', }} inline verticalAlign='bottom'/>
                Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item name='menu' active={activeItem === 'menu'} onClick={this.handleItemClick}>
            <Link to={'#'} >
              <Image src={'/static/icon/dashboard.svg'} style={{ width: '18px', }} inline verticalAlign='bottom'/>
              Menu
            </Link>
          </Menu.Item>
          <Menu.Item name='report' active={activeItem === 'report'} onClick={this.handleItemClick}>
            <Link to={'#'} >
              <Image src={'/static/icon/dashboard.svg'} style={{ width: '18px', }} inline verticalAlign='bottom'/>  
              Report
            </Link>
          </Menu.Item>
        </Sidebar>

      </Segment>
    )
  }
}

export default App
