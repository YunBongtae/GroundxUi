import styled from '@emotion/styled'
import { FontSystem, ColorSystem } from '../../styles/common'
import { EllipsisTextInterface } from './EllipsisText'

export type StyledEllipsisTextInterface = Omit<
  EllipsisTextInterface,
  'children'
>

export const StyledEllipsisText = styled.span<StyledEllipsisTextInterface>`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  ${({ font }) => font || FontSystem.body16Regular};
  color: ${({ color }) => color || ColorSystem.black100};
  ${({ lineClamp }) =>
    lineClamp &&
    `display: -webkit-box;
  -webkit-line-clamp: ${lineClamp};
  -webkit-box-orient: vertical;
  white-space: normal;`};
  width: 100%;
`
