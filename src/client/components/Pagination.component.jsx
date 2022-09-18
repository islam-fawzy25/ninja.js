import React from 'react'

const Pagination = (props) => {
  const { pageNumber, onChange ,isActivePage,renderedPageNumber} = props

  if (isActivePage) {
    return (
      <button className="page-item mr-1 page-link button-outline" onClick={()=>{ onChange(pageNumber)}} >{renderedPageNumber}</button>
    )
  }
  return (
    <button className="page-item mr-1 page-link" onClick={()=>{ onChange(pageNumber)}} >{renderedPageNumber}</button>
  )
}

export default Pagination
