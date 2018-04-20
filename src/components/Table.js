/*
  TABLE
  USAGE:
  props.header = [
    'header 1', 'header 2'
  ]

  props.data = [
    [
      'row 1', 'row 2', 'row 3',
    ],
    [
      'row 1', 'row 2', 'row 3',
    ]
  ]
*/

//MODULES
import React, { Component } from 'react'

//STYLES 
import styles from './css/table.scss'

//COMPONENT
export default class Table extends Component {
  renderHeader() {
    let { header } = this.props

    return header.map((data, i) => {
      return (
        <div className={styles.header}key={i} >
          {data}
        </div>
      )
    })
  }

  renderData() {
    let { data } = this.props

    return data.map((data, i) => {
      return (
        <div className={styles.row} key={i} >
          {data.map((data, i) => (
            <div className={styles.data} key={i}>
              {data}
            </div>
          ))}
        </div>
      )
    })
  }

  render() {
    return (
      <div className={styles.container} >
        <div className={styles.table} >
          <div className={`${styles.headers} ${styles.row}`} >
            {this.renderHeader()}
          </div>
          
          <div className={styles.wrapper} >
            {this.renderData()}
          </div>
        </div>
      </div>
    )
  }
}
