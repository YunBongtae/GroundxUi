import styled from '@emotion/styled'
import { ColorSystem, FontSystem } from '../../styles/common'
import { DotTextInterface } from './DotText'

type DotTextStyleInterface = Pick<DotTextInterface, 'type'>

export const DotTextWrapper = styled.div<DotTextStyleInterface>`
  position: relative;
  padding-left: 8px;
  ${FontSystem.body12Regular};
  color: ${({ type, color }) => {
    if (type) {
      if (type === 'red') {
        return ColorSystem.red100
      }
      if (type === 'blue') {
        return ColorSystem.blue200
      }
    }

    if (color) {
      return color
    }

    return ColorSystem.gray100A70
  }};

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 8px;
    left: 0;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: ${({ type, color }) => {
      if (type) {
        if (type === 'red') {
          return ColorSystem.red100
        }
        if (type === 'blue') {
          return ColorSystem.blue200
        }
      }

      if (color) {
        return color
      }

      return ColorSystem.gray100A70
    }}
`
