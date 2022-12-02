import styled from '@emotion/styled'
import {
  KeyButtonInterface,
  CircleInterface,
} from './numberKeypadStyleInterface'
import { icnKeypadDeleteGray, icnKeypadDeleteWhite } from '../../../styles/img'
import { ColorSystem } from '../../../styles/common'
import { KeypadType } from '../numberKeypadInterface'

export const NumberKeypadWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;
`

export const KeyButton = styled.button<KeyButtonInterface>`
  position: relative;
  width: calc(100% / 3);
  height: 56px;
  line-height: 56px;
  font-size: 24px;
  border: none;
  color: ${({ keypadType }) => {
    return keypadType === KeypadType.OTP
      ? ColorSystem.white100
      : ColorSystem.gray100
  }};
  background: ${({ keypadType }) => {
    return keypadType === KeypadType.OTP
      ? ColorSystem.blue200
      : ColorSystem.white100
  }};

  ${({ imgUrl, keypadType }) => {
    return imgUrl
      ? keypadType === KeypadType.OTP
        ? `color:${ColorSystem.blue200}
          font-size: 0;
          background: url(${icnKeypadDeleteWhite}) no-repeat center center;`
        : `color: transparent;
          font-size: 0;
          background: url(${icnKeypadDeleteGray}) no-repeat center center;`
      : ''
  }}
`

export const ButtonText = styled.span`
  display: inline-block;
  color: inherit;
`

export const Circle = styled.span<KeyButtonInterface & CircleInterface>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ touchFlag }) =>
    touchFlag
      ? 'width:48px; height:48px; opacity:1;'
      : 'width:0px; height:0px; opacity:0;'}
  border-radius: 50%;
  opacity: 0.1;
  transition: all 400ms;
  background: ${({ keypadType }) => {
    return keypadType === KeypadType.OTP
      ? ColorSystem.blue200
      : ColorSystem.white100
  }};
`
