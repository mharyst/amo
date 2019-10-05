import React from 'react'
import PropTypes from 'prop-types'
import css from './styles.css'
import Cell from './cell'

const Row = ({cells, rowName}) => (
  <tr>
    <td className={css['row-heading']}>{rowName}</td>
    {cells.map(({id, text}) => (
      <Cell
        key={id}
        text={text}
      />
    ))}
  </tr>
)

Row.propTypes = {
  cells: PropTypes.array.isRequired,
  rowName: PropTypes.string.isRequired,
}

export default Row
