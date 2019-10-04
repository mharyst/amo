import React from 'react'
import PropTypes from 'prop-types'

const Column = ({text}) => (
  <th>{text}</th>
)

Column.propTypes = {
  text: PropTypes.string,
}

Column.defaultProps = {
  text: null,
}

export default Column
