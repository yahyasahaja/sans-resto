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
    'SC001',
    'Zain Fikri H',
    '12',
  ],
  [
    'SC003',
    'Vivy Junita',
    '10',
  ],
  [
    'SC001',
    'Zain Fikri H',
    '12',
  ],
  [
    'SC002',
    'Yahya Sahaja ',
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
    'SC001',
    'Zain Fikri H',
    '12',
  ],
]

//INNER_CONFIG
const MAX_ITEMS = 5

//COMPONENT
export default class Orders extends Component {
  state = {
    tableData: tableData.slice(0, 5),
    loading: false
  }

  handleChange = activePage => {
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({
        tableData: tableData.slice(
          (activePage - 1) * MAX_ITEMS, (activePage - 1) * MAX_ITEMS + MAX_ITEMS
        ),
        loading: false
      })
    }, 1000)
  }

  render() {
    return (
      <Card className={styles.card} >
        <div className={styles.header} >
          <h1>Orders</h1>
        </div>
        <Table 
          headers={tableHeaders} 
          data={this.state.tableData} 
          pagination
          totalPages={Math.ceil(tableData.length / MAX_ITEMS)}
          onPageChange={this.handleChange}
          defaultWidth={500}
          loading={this.state.loading}
        />
      </Card>
    )
  }
}
