import React from 'react'
import { SerializedStyles } from '@emotion/react'

import { ColorSystemValueTypes } from 'styles/common'

import { StyledBulletList } from './BulletListStyle'

/**
 * 기본 리스트 컴포넌트 List
 * Bullet이 들어간 리스트 컴포던트
 * */

export interface BulletListInterface {
  color?: ColorSystemValueTypes // 리스트 컬러 default: gray 컬러
  children?: React.ReactNode // children 표시 (주로 텍스트)
  styles?: SerializedStyles // 세부 스타일 변경
}

export default function BulletList({
  children,
  ...props
}: BulletListInterface) {
  return <StyledBulletList {...props}>{children}</StyledBulletList>
}
