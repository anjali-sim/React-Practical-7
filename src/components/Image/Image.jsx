import React from 'react'
import ImageStyle from '../../styled/ImageStyle.style'
import formImage from '../../assets/images/formImage.png'
import DivImageStyle from '../../styled/DivImageStyle.style'

const Image = () => {
  return (
    <div>
        <DivImageStyle>
      <ImageStyle src={formImage} alt="SignUp image" />
      </DivImageStyle>
    </div>
  )
}

export default Image
