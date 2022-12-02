import styled from '@emotion/styled'
import { ColorSystem, FontSystem } from 'styles/common'

export const AssetListWrapper = styled.div`
  padding: 17px 0 0 24px;
`

export const AssetListInnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding-right: 22px;
  padding-bottom: 17px;
  border-bottom: 1px solid ${ColorSystem.black100A4};
`

export const AssetImage = styled.img`
  width: 18px;
  height: 18px;
  margin-top: 2px;
  margin-right: 4px;
`

export const AssetDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const NameText = styled.span`
  ${FontSystem.body14Regular};
  color: ${ColorSystem.gray100};
`

export const AmountText = styled.span`
  ${FontSystem.num12Regular};
  color: ${ColorSystem.gray100A70};
`
