import styled from '@emotion/styled'
import { ColorSystem, FontSystem } from 'styles/common'

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background-color: ${ColorSystem.white100};
  z-index: 999;
`

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  // TODO gap 대체할 설계 고민
  gap: 16px;
`

export const CenterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
  ${FontSystem.body16Bold};
`

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`
