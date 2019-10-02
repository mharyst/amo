import React, {useState} from 'react'
import classNames from 'classnames'
import {validateEmail} from './utils'
import css from './styles.css'

const EmailInput = () => {
  const [email, changeEmail] = useState('')
  const [error, setError] = useState('')
  const handleSubmit = () => {
    if (!error) {
      changeEmail('')
    }
  }
  const handleInputChange = ({target: {value}}) => {
    const validationError = validateEmail(value)
    setError(validationError)
    changeEmail(value)
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
        onSubmit={handleSubmit}
        value={email}
      />
      {error && (
        <span>{error}</span>
      )}
      <button
        type="submit"
        className={css.button}
      >
        Resend
      </button>
    </form>
  )
}

export default EmailInput
