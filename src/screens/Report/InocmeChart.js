//MODULES
import React, { Component } from 'react'
import { Search, Label } from 'semantic-ui-react'
import _ from 'lodash'

//STYLES
import styles from './css/income-table.scss'
import styles2 from './css/income-chart.scss'

//COMPONENTS
import Card from '../../components/Card'
// import Table from '../../components/Table'
import { Line } from 'react-chartjs-2'

const tableData = [
  120000,
  300000,
  150000,
  200000,
  100000,
  500000,
  800000,
]

//INNER_CONFIG
const MAX_ITEMS = 5

//COMPONENT
export default class IncomeChart extends Component {
  state = {
    loading: false
  }

  handleChange = activePage => {
    this.setState({ loading: true })
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
      <Card className={styles.card + ' ' + styles2.container} >
        <div className={styles.header} >
          <div className={styles.title} >
            <h1>Income</h1>
            <div>
              <Label circular color="grey">2</Label>
            </div>
          </div>
          <Search
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            {...this.props}
          />
        </div>
        <Line
          data={
            {
              labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              datasets: [{
                label: '# of Votes',
                data: tableData,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }]
            }
          }
        />
      </Card>
    )
  }
}
