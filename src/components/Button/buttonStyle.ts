import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ButtonSizes, ButtonStyles } from '../../styles/common'
import { ButtonInterface } from './Button'

type StyledButtonType = Pick<ButtonInterface, 'buttonType' | 'size' | 'styles'>

export const StyledButton = styled.button<StyledButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 100%;
  border-radius: 4px;

  ${({ buttonType }) =>
    buttonType ? ButtonStyles[buttonType] : ButtonStyles.Primary}

  ${({ size }) => `height: ${size || ButtonSizes.Large}px;`}

  ${({ styles }) =>
    css`
      ${styles}
    `}
`
