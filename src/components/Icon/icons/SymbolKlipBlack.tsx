import SVGComponent from '../../../styles/img/assets/symbol_klip_black.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 48
 * height 24
 * */

const SymbolKlipBlack = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '48'} height={height ?? '24'} />
    </IconWrapper>
  )
}

export default SymbolKlipBlack
