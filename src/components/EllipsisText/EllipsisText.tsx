import React from 'react'
import { ColorSystemValueTypes, FontSystemValueTypes } from '../../styles/common'
import { StyledEllipsisText } from './ellipsisTextStyle'

export interface EllipsisTextInterface {
  children?: React.ReactNode
  font?: FontSystemValueTypes
  color?: ColorSystemValueTypes
  lineClamp?: number
}

const EllipsisText = ({ children, ...props }: EllipsisTextInterface) => {
  return <StyledEllipsisText {...props}>{children}</StyledEllipsisText>
}

export default EllipsisText
