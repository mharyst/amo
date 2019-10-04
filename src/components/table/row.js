import React from 'react'
import PropTypes from 'prop-types'

const Row = ({cells, rowName}) => (
  <tr>
    <td>{rowName}</td>
    {cells.map(({id, text}) => (
      <td key={id}>{text}</td>
    ))}
  </tr>
)

Row.propTypes = {
  cells: PropTypes.array.isRequired,
  rowName: PropTypes.string.isRequired,
}

export default Row
