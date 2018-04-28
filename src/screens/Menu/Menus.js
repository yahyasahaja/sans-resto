//MODULES
import React, { Component } from 'react'
import { Search, Image } from 'semantic-ui-react'
import _ from 'lodash'
import { Link } from 'react-router-dom'

//STYLES
import styles from './css/menus.scss'

//COMPONENTS
import Card from '../../components/Card'
import Table from '../../components/Table'

const tableHeaders = [
  'Menu',
  'Name',
  'Price (Rp.)',
]

const tableData = [
  [
    <div className={styles.img} >
      <Image className={styles.imgMenus} src="/static/image/sate.png" />
    </div>,
    <div className={styles.title}>Sate Ayam<div className={styles.desc}>10 tusuk</div></div>,
    <div className={styles.delete} >15.000 
      <span className={`material-icons ${styles.icon1}`}>settings</span>
      <span className={`material-icons ${styles.icon}`}>delete</span>
    </div>,
  ],
  [
    <div className={styles.img} >
      <Image className={styles.imgMenus} src="/static/image/sate.png" />
    </div>,
    <div className={styles.title}>Sate Ayam<div className={styles.desc}>10 tusuk</div></div>,
    <div className={styles.delete} >15.000 
      <span className={`material-icons ${styles.icon1}`}>settings</span>
      <span className={`material-icons ${styles.icon}`}>delete</span>
    </div>,
  ],
  [
    <div className={styles.img} >
      <Image className={styles.imgMenus} src="/static/image/sate.png" />
    </div>,
    <div className={styles.title}>Sate Ayam<div className={styles.desc}>10 tusuk</div></div>,
    <div className={styles.delete} >15.000 
      <span className={`material-icons ${styles.icon1}`}>settings</span>
      <span className={`material-icons ${styles.icon}`}>delete</span>
    </div>,
  ],
  [
    <div className={styles.img} >
      <Image className={styles.imgMenus} src="/static/image/sate.png" />
    </div>,
    <div className={styles.title}>Sate Ayam<div className={styles.desc}>10 tusuk</div></div>,
    <div className={styles.delete} >15.000 
      <span className={`material-icons ${styles.icon1}`}>settings</span>
      <span className={`material-icons ${styles.icon}`}>delete</span>
    </div>,
  ],
  [
    <div className={styles.img} >
      <Image className={styles.imgMenus} src="/static/image/sate.png" />
    </div>,
    <div className={styles.title}>Sate Ayam<div className={styles.desc}>10 tusuk</div></div>,
    <div className={styles.delete} >15.000 
      <span className={`material-icons ${styles.icon1}`}>settings</span>
      <span className={`material-icons ${styles.icon}`}>delete</span>
    </div>,
  ],
  [
    <div className={styles.img} >
      <Image className={styles.imgMenus} src="/static/image/sate.png" />
    </div>,
    <div className={styles.title}>Sate Ayam<div className={styles.desc}>10 tusuk</div></div>,
    <div className={styles.delete} >15.000 
      <span className={`material-icons ${styles.icon1}`}>settings</span>
      <span className={`material-icons ${styles.icon}`}>delete</span>
    </div>,
  ],
  [
    <div className={styles.img} >
      <Image className={styles.imgMenus} src="/static/image/sate.png" />
    </div>,
    <div className={styles.title}>Sate Ayam<div className={styles.desc}>10 tusuk</div></div>,
    <div className={styles.delete} >15.000 
      <span className={`material-icons ${styles.icon1}`}>settings</span>
      <span className={`material-icons ${styles.icon}`}>delete</span>
    </div>,
  ],
  [
    <div className={styles.img} >
      <Image className={styles.imgMenus} src="/static/image/sate.png" />
    </div>,
    <div className={styles.title}>Sate Ayam<div className={styles.desc}>10 tusuk</div></div>,
    <div className={styles.delete} >15.000 
      <span className={`material-icons ${styles.icon1}`}>settings</span>
      <span className={`material-icons ${styles.icon}`}>delete</span>
    </div>,
  ],
  [
    <div className={styles.img} >
      <Image className={styles.imgMenus} src="/static/image/sate.png" />
    </div>,
    <div className={styles.title}>Sate Ayam<div className={styles.desc}>10 tusuk</div></div>,
    <div className={styles.delete} >15.000 
      <span className={`material-icons ${styles.icon1}`}>settings</span>
      <span className={`material-icons ${styles.icon}`}>delete</span>
    </div>,
  ],
  [
    <div className={styles.img} >
      <Image className={styles.imgMenus} src="/static/image/sate.png" />
    </div>,
    <div className={styles.title}>Sate Ayam<div className={styles.desc}>10 tusuk</div></div>,
    <div className={styles.delete} >15.000 
      <span className={`material-icons ${styles.icon1}`}>settings</span>
      <span className={`material-icons ${styles.icon}`}>delete</span>
    </div>,
  ],
  [
    <div className={styles.img} >
      <Image className={styles.imgMenus} src="/static/image/sate.png" />
    </div>,
    <div className={styles.title}>Sate Ayam<div className={styles.desc}>10 tusuk</div></div>,
    <div className={styles.delete} >15.000 
      <span className={`material-icons ${styles.icon1}`}>settings</span>
      <span className={`material-icons ${styles.icon}`}>delete</span>
    </div>,
  ],

]

//INNER_CONFIG
const MAX_ITEMS = 5

//COMPONENT
export default class Orders extends Component {
  state = {
    tableData: tableData.slice(0, MAX_ITEMS),
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

  handleSearchChange = search => {
    console.log(search)
  }

  render() {
    return (
      <Card className={styles.card} >
        <div className={styles.left} >
          <Search
            size='mini'
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            {...this.props}
          />
          <div className={styles.title} >
            <div>
              <Link to="/menu" >Spesial</Link>
            </div>
            <div>
              <Link to="/menu" >Soups</Link>
            </div>
            <div>
              <Link to="/menu" >Pasta</Link>
            </div>
            <div>
              <Link to="/menu" >Vegetables</Link>
            </div>
            <div>
              <Link to="/menu" >Sandwiches</Link>
            </div>
            <div>
              <Link to="/menu" >Wraps</Link>
            </div>
          </div>
        </div>
        <div className={styles.right} >
          <Table 
            headers={tableHeaders} 
            data={this.state.tableData} 
            pagination
            totalPages={Math.ceil(tableData.length / MAX_ITEMS)}
            onPageChange={this.handleChange}
            defaultWidth={500}
            loading={this.state.loading}
          />
        </div>
      </Card>
    )
  }
}
