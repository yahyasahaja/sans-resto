/*
  TABLE
  USAGE:
  props.headers = [
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
  renderHeaders() {
    let { headers } = this.props

    return headers.map((data, i) => {
      return (
        <td className={styles.header}key={i} >
          {data}
        </td>
      )
    })
  }

  renderData() {
    let { data } = this.props

    return data.map((data, i) => {
      return (
        <tr className={styles.row} key={i} >
          {data.map((data, i) => (
            <td className={styles.data} key={i}>
              {data}
            </td>
          ))}
        </tr>
      )
    })
  }

  render() {
    return (
      <div className={styles.container} >
        <table className={styles.table} >
          <thead className={`${styles.headers} ${styles.row}`} >
            <tr>
              {this.renderHeaders()}
            </tr>
          </thead>
          
          <tbody className={styles.wrapper} >
            {this.renderData()}
          </tbody>
        </table>
      </div>
    )
  }
}
