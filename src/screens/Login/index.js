//MODULES
import React, { Component } from 'react'
import { Button, Form, Image } from 'semantic-ui-react'

//ASSETS

//STYLES
import styles from './css/index.scss'

//COMPONENTS

export default class Login extends Component {
  
  onSubmit = e => {
    e.preventDefault()
    
  }
  
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.bg}>
          <div className={styles.title}>
            <h1>SANS RESTO</h1>
            <a>Ease of Sales Management</a>
          </div>

          <div className={styles.login}>
            <Form onSubmit={this.onSubmit} >
              <Form.Field>
                <label>Email</label>
                <input placeholder='resto@sans.ngopi.men' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='*******' />
              </Form.Field>
              <Form.Field>
                <a>forget password?</a>
              </Form.Field>
              <Button type='submit' fluid color='grey' >Login</Button>
            </Form>
          </div>

          <div className={styles.cs} >
            <div className={styles.support}>
              <Image className={styles.imgSupport} src="/static/icon/support_green.svg" inline verticalAlign='bottom' />        
              <span className={styles.title} >Support</span>
            </div>
            <div className={styles.text}>
              <span>customer@sans.id</span>
              <div>+62 85851851276</div>
            </div>
            <div>
              <a className={styles.customer} href="http://customer.sans.ngopi.men" target="_blank" >customer.sans.ngopi.men</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}