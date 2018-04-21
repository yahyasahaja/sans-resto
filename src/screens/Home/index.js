//MODULES
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

//ASSETS
// import logo from './logo.svg'
// import { Sidebar, Fragment, Menu, Image } from 'semantic-ui-react'

//STYLES
import styles from './css/index.scss'

//COMPONENTS
import Card from '../../components/Card'
import Table from '../../components/Table'
import LeftBar from '../../components/LeftBar'
import TopBar from '../../components/TopBar'

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
class App extends Component {
  render() {
    return (
      <div className={styles.container} >
        <TopBar />
        <LeftBar />

        <div className={styles.content} >
          <Card className={styles.card} >
            <div className={styles.header} >
              <h1>Orders</h1>
            </div>
            <Table headers={tableHeaders} data={tableData} />
          </Card>

          <Card className={styles.card} >
            <div className={styles.header} >
              <h1>Orders</h1>
            </div>
            <Table headers={tableHeaders} data={tableData} />
          </Card>

          <Card className={styles.card} >
            <div className={styles.header} >
              <h1>Orders</h1>
            </div>
            <Table headers={tableHeaders} data={tableData} />
          </Card>
        </div>
      </div>
    )
  }
}

export default App
