import React from 'react'
import  { SubmitButtonStyle, ResetButtonStyle } from '../../styled/ButtonStyle.style'

const Button = () => {
  return (
    <div>
      <SubmitButtonStyle type="submit">Submit</SubmitButtonStyle>
      <ResetButtonStyle type="submit">Reset</ResetButtonStyle>
    </div>
  )
}

export default Button
