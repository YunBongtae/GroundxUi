import React from 'react'
import { DotTextWrapper } from './dotTextStyle'
import { ColorSystemValueTypes } from '../../styles/common'

export interface DotTextInterface {
  children: React.ReactNode
  type?: 'blue' | 'red'
  color?: ColorSystemValueTypes
}

const DotText = ({ type, children, color }: DotTextInterface) => {
  return (
    <DotTextWrapper type={type} color={color}>
      {children}
    </DotTextWrapper>
  )
}

export default DotText
