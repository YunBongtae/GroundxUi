import React from 'react'
import { TableListTypeValueTypes } from 'styles/common'
import { SerializedStyles } from '@emotion/react'

import {
  StyledTableListWrapper,
  StyledTableListTitle,
  StyledTableListContent,
  StyledTableListInnerWrapper,
} from 'component/common/List/TableList/tableListStyle'

interface TitlePadding {
  titleTopPadding?: string
  titleBottomPadding?: string
}

interface ContentPadding {
  contentTopPadding?: string
  contentBottomPadding?: string
}

/**
 * 기본 리스트 컴포넌트 TableList
 * StyledTableList를 이용하여 버튼의 전반적인 스타일을 설정하고, size와 styles를 이용하여 세부 스타일 변경
 * */

export interface TableListInterface {
  type: TableListTypeValueTypes // 리스트 정렬 default: left
  title: React.ReactNode
  content?: React.ReactNode
  titlePadding?: TitlePadding
  contentPadding?: ContentPadding
  styles?: SerializedStyles // 세부 스타일 추가시 변경
  className?: string
}

export default function TableList({
  title,
  content,
  ...props
}: TableListInterface) {
  return (
    <StyledTableListWrapper {...props}>
      <StyledTableListInnerWrapper>
        <StyledTableListTitle>{title}</StyledTableListTitle>
        <StyledTableListContent>{content}</StyledTableListContent>
      </StyledTableListInnerWrapper>
    </StyledTableListWrapper>
  )
}
