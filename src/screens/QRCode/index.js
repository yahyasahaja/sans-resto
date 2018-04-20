import React, { Component } from 'react'
import QRCode from 'qrcode.react'

import Table from '../../components/Table'

export default class componentName extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        
        <h1 style={{textAlign: 'center', marginBottom: 50, marginTop: 50}}>CAFETARIA UB</h1>
        <QRCode value="scanresto" style={{width: 300, height: 300, margin: 'auto', marginTop: 10}} />
      </div>
    )
  }
}
