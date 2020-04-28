import React from 'react'
import { Box, BasePropertyProps } from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props) => {
  const { record } = props

  const srcImg = record.params['profilePhotoLocation']
  return (
    <Box>
      {srcImg ? (
        <img src={srcImg} width="100px"/>
      ) : 'no image'}
    </Box>
  )
}

export default Edit