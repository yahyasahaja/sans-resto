import React, { Component } from 'react'
import QRCode from 'qrcode.react'

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
    'Yahya Sahaja',
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

export default class componentName extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <Table headers={tableHeaders} data={tableData} />
        <h1 style={{textAlign: 'center', marginBottom: 50, marginTop: 50}}>CAFETARIA UB</h1>
        <QRCode value="scanresto" style={{width: 300, height: 300, margin: 'auto', marginTop: 10}} />
      </div>
    )
  }
}
