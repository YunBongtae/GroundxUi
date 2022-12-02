import styled from '@emotion/styled'
import { FontSystem, ColorSystem } from 'styles/common'
import { BulletListInterface } from 'component/common/List/BulletList/BulletList'

type StyledBulletListType = Pick<BulletListInterface, 'color' | 'styles'>

export const StyledBulletList = styled.div<StyledBulletListType>`
  position: relative;
  padding-left: 8px;
  &:before {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: ${({ color }) => color || ColorSystem.gray400};
  }
  color: ${({ color }) => color || ColorSystem.gray100A70};

  ${FontSystem.body14Regular};
  ${({ styles }) => styles};
`
