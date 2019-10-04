import React, {useState, useEffect} from 'react'
import {fetchData} from './utils'
import Column from './column'


const Table = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState({})
  useEffect(() => {
    async function getData() {
      try {
        const fetchedData = await fetchData()
        setData(fetchedData)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error.message)
        setError('Something went wrong')
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])
  if (loading) {
    return <span>Loading...</span>
  }
  if (error) {
    return <span>{error}</span>
  }
  const {columns, rows, cell} = data
  const possibleRowsAmount = Math.ceil(cell.length / columns.length)
  const visibleRows = rows.splice(0, possibleRowsAmount)
  return (
    <table>
      <tbody>
        <tr>
          <Column />
          {columns.map((column, key) => (
            <Column
              key={`${column}-${key + 1}`}
              text={column}
            />
          ))}
        </tr>
        {visibleRows.map((row, rowIndex) => (
          <tr key={`${row}-${rowIndex + 1}`}>
            <td>{row}</td>
            {cell.splice(0, columns.length).map(({id, text}) => (
              <td key={id}>{text}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
