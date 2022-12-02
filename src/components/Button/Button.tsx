import React from 'react'
import {
  ButtonSizesValueTypes,
  ButtonTypes,
  ButtonTypesValueTypes,
} from '../../styles/common'
import { SerializedStyles } from '@emotion/react'
import { IcnKakaoBrown } from '../Icon'
import { StyledButton } from './buttonStyle'

/**
 * 기본 버튼 컴포넌트 Button
 * ButtonType를 이용하여 버튼의 전반적인 스타일을 설정하고, size와 styles를 이용하여 세부 스타일 변경
 * */

export interface ButtonInterface {
  buttonType?: ButtonTypesValueTypes // 버튼 타입 지정 default: Primary
  size?: ButtonSizesValueTypes // 버튼 높이 지정 default: 56
  styles?: SerializedStyles // 세부 스타일 변경
  children?: React.ReactNode // children 표시 (주로 텍스트)
  startIcon?: React.ReactNode // children 앞 엘리먼트
  endIcon?: React.ReactNode // children 뒤 엘리먼트
  disabled?: boolean // 비활성화 여부
  onClick?: () => void // 버튼 클릭 이벤트
}

export default function Button({
  buttonType,
  startIcon,
  endIcon,
  children,
  ...props
}: ButtonInterface) {
  return (
    <StyledButton buttonType={buttonType} {...props}>
      {buttonType === ButtonTypes.Kakao ? <IcnKakaoBrown /> : startIcon}
      {children}
      {endIcon}
    </StyledButton>
  )
}
