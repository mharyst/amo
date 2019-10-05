import React, {useState} from 'react'
import classNames from 'classnames'
import {validateEmail} from './utils'
import css from './styles.css'

const EmailInput = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!error) {
      setEmail('')
    }
  }
  const handleInputChange = ({target: {value}}) => {
    const validationError = validateEmail(value)
    setError(validationError)
    setEmail(value)
  }

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit}
    >
      <span>Enter email if you wish to resend the meal plan link</span>
      <input
        type="text"
        placeholder="Email"
        id="id5"
        name="email"
        className={classNames(css.input, error && css['input--error'])}
        autoComplete="email"
        onChange={handleInputChange}
        value={email}
      />
      <button
        type="submit"
        className={css.button}
        disabled={error}
      >
        Resend
      </button>
    </form>
  )
}

export default EmailInput
