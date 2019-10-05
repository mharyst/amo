import React from 'react'
import PropTypes from 'prop-types'
import css from './styles.css'


const Column = ({text}) => (
  <th className={css.column}>{text}</th>
)

Column.propTypes = {
  text: PropTypes.string,
}

Column.defaultProps = {
  text: null,
}

export default Column
