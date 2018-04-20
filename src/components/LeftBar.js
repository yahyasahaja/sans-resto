import React, { Component } from 'react'
import { Sidebar, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class LeftBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Sidebar 
          as={Menu} 
          visible 
          vertical 
          inverted 
          style={{ paddingTop: '5vh', width: '10vw', minWidth: '150px', backgroundColor: '#373B3A', position: 'fixed' }}>
          <Menu.Item 
            name='home' 
            active={activeItem === 'home'} 
            onClick={this.handleItemClick}>  
            <Link to={'#'} >
              <Image src={'/static/icon/dashboard.svg'} style={{ width: '18px', }} inline verticalAlign='bottom'/>
              <span style={{ paddingLeft: '5px' }} >Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item 
            name='menu' 
            active={activeItem === 'menu'} 
            onClick={this.handleItemClick}>
            <Link to={'#'} >
              <Image src={'/static/icon/menu.svg'} style={{ width: '18px', }} inline verticalAlign='bottom'/>
              <span style={{ paddingLeft: '5px' }} >Menu</span>
            </Link>
          </Menu.Item>
          <Menu.Item 
            name='report' 
            active={activeItem === 'report'} 
            onClick={this.handleItemClick}>
            <Link to={'#'} >
              <Image src={'/static/icon/report.svg'} style={{ width: '18px', }} inline verticalAlign='bottom'/>  
              <span style={{ paddingLeft: '5px' }} >Report</span>
            </Link>
          </Menu.Item>
        </Sidebar>

      </div>
    )
  }
}