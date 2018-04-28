//MODULES
import React, { Component } from 'react'
import { Search, Input, Button } from 'semantic-ui-react'
import _ from 'lodash'

//STYLES
import styles from './css/profile-settings.scss'

//COMPONENTS
import Card from '../../components/Card'

//COMPONENT
export default class ProfileSettings extends Component {
  state = {
    loading: false
  }
  
  handleSearchChange = search => {
    console.log(search)
  }

  onSubmit = e => {
    e.preventDefault()

    
  }

  render() {
    return (
      <Card className={styles.card} >
        <div className={styles.header} >
          <div className={styles.title} >
            <h1>Restaurant Profile</h1>
          </div>
          <Search
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            {...this.props}
          />
        </div>
        
        <form className={styles.wrapper} onSubmit={this.onSubmit} >
          <div className={styles.input} >
            <label htmlFor=""></label>
            <Input label="Name" placeholder="Restaurant name" fluid />
          </div>
          
          <div className={styles.input} >
            <Input label="Description" placeholder="Restaurant description" fluid />
          </div>

          <div className={styles.input} >
            <Input label="Phone" placeholder="Phone" fluid />
          </div>

          <div className={styles.input} >
            <Input label="Address" placeholder="Address" fluid />
          </div>

          <div className={styles.input} >
            <Input label="Social Media" placeholder="Social media link" fluid />
          </div>
          
          <div className={styles.button} >
            <Button primary>Update Profile</Button>
          </div>
        </form>
      </Card>
    )
  }
}
