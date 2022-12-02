import React, { ReactNode, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IcnBackBlack,
  IcnCloseBlack,
  IcnPushBlack,
  IcnQrScannerBlack,
  SymbolKlipBlack,
} from 'component/common/icon'

import {
  StyledHeader,
  LeftSection,
  RightSection,
  CenterSection,
} from './headerStyle'

interface HeaderInterface {
  title?: ReactNode
  backButton?: boolean
  closeButton?: boolean
  qrButton?: boolean
  pushButton?: boolean
  backPath?: string | (() => void)
  rightButton?: ReactNode
}

function Header({
  title,
  backButton,
  closeButton,
  qrButton,
  pushButton,
  backPath,
  rightButton,
}: HeaderInterface) {
  const navigate = useNavigate()
  const backPathHandler = useCallback(() => {
    // backPath를 타입별로 처리
    switch (typeof backPath) {
      case 'string':
        return navigate(backPath)
      case 'function':
        return backPath()
      default:
        // 메시지로부터 진입했을 경우에 대한 방어 코드
        // TODO navigate length?
        if (navigate.length <= 1) {
          return navigate('/')
        }
        return navigate(-1)
    }
  }, [navigate, backPath])

  return (
    <StyledHeader>
      <LeftSection>
        {backButton && <IcnBackBlack onClick={backPathHandler} />}
        {closeButton && <IcnCloseBlack onClick={backPathHandler} />}
      </LeftSection>
      <CenterSection>{title || <SymbolKlipBlack />}</CenterSection>
      <RightSection>
        {qrButton && <IcnQrScannerBlack />}
        {/* TODO push 상태를 받는 코드로 설계 변경 */}
        {pushButton && <IcnPushBlack />}
        {rightButton}
      </RightSection>
    </StyledHeader>
  )
}

export default Header
