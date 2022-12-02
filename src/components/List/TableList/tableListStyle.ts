import styled from '@emotion/styled'
import { TableListStyles } from 'styles/common'

import { TableListInterface } from 'component/common/List/TableList/TableList'

type StyledTableListType = Omit<TableListInterface, 'title' | 'content'>

export const StyledTableListTitle = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`

export const StyledTableListContent = styled.div`
  word-break: break-all;
  width: 100%;
  display: flex;
`

export const StyledTableListWrapper = styled.div<StyledTableListType>`
  width: 100%;

  ${({ type }) => {
    return type ? TableListStyles[type] : TableListStyles.LineDefault
  }}

  ${StyledTableListTitle} {
    ${({ titlePadding }) =>
      titlePadding
        ? `padding: ${titlePadding.titleTopPadding ?? 0} 0 ${
            titlePadding.titleBottomPadding ?? 0
          } 0`
        : ''};
  }
  ${StyledTableListContent} {
    ${({ contentPadding }) => {
      return contentPadding
        ? `padding: ${contentPadding.contentTopPadding ?? 0} 0 ${
            contentPadding.contentBottomPadding ?? 0
          } 0`
        : ''
    }};
  }

  ${({ styles }) => styles};
`

export const StyledTableListInnerWrapper = styled.div`
  display: flex;
  width: 100%;
`
