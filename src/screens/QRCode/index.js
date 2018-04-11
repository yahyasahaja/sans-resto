import React, { Component } from 'react'
import QRCode from 'qrcode.react'

export default class componentName extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <h1 style={{textAlign: 'center', marginBottom: 50, marginTop: 50}}>SANS CAFE QR CODE LOGIN</h1>
        <QRCode value="test1" style={{width: 300, height: 300, margin: 'auto', marginTop: 10}} />
      </div>
    )
  }
}
