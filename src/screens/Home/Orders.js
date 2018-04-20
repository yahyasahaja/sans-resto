//MODULES
import React, { Component } from 'react'

//STYLES
import styles from './css/orders.scss'

//COMPONENTS
import Card from '../../components/Card'
import Table from '../../components/Table'

const tableHeaders = [
  'Number',
  'Name',
  'Table',
]

const tableData = [
  [
    'SC001',
    'Zain Fikri H',
    '12',
  ],
  [
    'SC002',
    'Yahya Sahaja ghwughewiuhgwihg ',
    '11',
  ],
  [
    'SC003',
    'Vivy Junita',
    '10',
  ],
  [
    'SC003',
    'Vivy Junita',
    '10',
  ],
  [
    'SC003',
    'Vivy Junita',
    '10',
  ],
  [
    'SC003',
    'Vivy Junita',
    '10',
  ],
]

//COMPONENT
export default class Orders extends Component {
  render() {
    return (
      <Card className={styles.card} >
        <div className={styles.header} >
          <h1>Orders</h1>
        </div>
        <Table headers={tableHeaders} data={tableData} />
      </Card>
    )
  }
}
