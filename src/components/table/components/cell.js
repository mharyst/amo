import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import css from './styles.css'

const Cell = ({text}) => (
  <td className={classNames(css.cell, css['cell--with-image'])}>
    {text}
  </td>
)

Cell.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Cell
