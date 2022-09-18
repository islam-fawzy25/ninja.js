import React from 'react'

import Row from '../../components/Row.component'
import Search from '../../components/Search.component'
import PaginationButton from '../../components/Pagination.component'

class DataTable extends React.Component {
  state = {
    rows: this.props.rows,
    currentPageNumber: 0,
    totalNumberOfPages: this.calculateTotalNumberOfPages(this.props.rows)
  }

  static defaultProps = {
    rowsPerPage: 40
  }

  calculateTotalNumberOfPages(rows) {
    const { rowsPerPage } = this.props
    if (rowsPerPage == 0) return 0
    return Math.ceil(rows.length / rowsPerPage)
  }

  search(event) {
    const { rows } = this.props
    const text = event.target.value
    let rowsFound = rows

    if (text) {
      rowsFound = rows.filter((row) => {
        return row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
      })
    }

    this.setState({
      rows: rowsFound,
      currentPageNumber: 0,
      totalNumberOfPages: this.calculateTotalNumberOfPages(rowsFound)
    })
  }

  changeToPageNumber(pageNumber) {
   return this.setState({ currentPageNumber: pageNumber })
  }

   isActivePage = (currentPageNumber,pageNumber) => {
    return currentPageNumber  == pageNumber 
  }

   renderedPageNumber = (pageNumber) => {
    return pageNumber  + 1
  }

  render() {
    const { rows, currentPageNumber, totalNumberOfPages } = this.state
    const { rowsPerPage } = this.props
    return (
      <div>
        <Search onSearch={this.search.bind(this)} />
        <table>
          <tbody>
            {rows
              .map(row => <Row key={row.per_id} row={row} />)
              .slice(currentPageNumber * rowsPerPage, ((currentPageNumber * rowsPerPage) + rowsPerPage))
            }
          </tbody>
        </table>
        <footer>
          {
            totalNumberOfPages > 1 &&
            Array
              .from(Array(totalNumberOfPages).keys())
              .map(pageNumber => {
                return (<PaginationButton
                  key={pageNumber}
                  pageNumber={pageNumber}
                  onChange={this.changeToPageNumber.bind(this)}
                  isActivePage={this.isActivePage(currentPageNumber,pageNumber)}
                  renderedPageNumber={this.renderedPageNumber(pageNumber)}
                />
                )
              })
          }
        </footer>

      </div>
    )
  }
}

export default DataTable
