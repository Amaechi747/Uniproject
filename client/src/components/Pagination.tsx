import React from 'react'

type PaginationProps = {
  propertyPerPage: number
  totalProperties: number
  paginate: (pageNumber: number) => void
}

const Pagination = (props: PaginationProps) => {
  const { propertyPerPage, totalProperties, paginate } = props
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProperties / propertyPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number} className="page-item">
          <a onClick={() => paginate(number)} href="!#" className="page-link">
            {number}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Pagination