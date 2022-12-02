import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { IconInterface } from '../../styles/common'

type IconWrapperInterface = Pick<IconInterface, 'styles'>

export const IconWrapper = styled.span<IconWrapperInterface>`
  display: inline-block;
  font-style: normal;
  line-height: 0;
  text-align: center;
  ${({ styles }) =>
    css`
      ${styles}
    `}
`
