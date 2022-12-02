import SVGComponent from '../../../styles/img/assets/icn_pricesUp_red.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 8
 * height 8
 * */

const IcnPricesUpRed = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '8'} height={height ?? '8'} />
    </IconWrapper>
  )
}

export default IcnPricesUpRed
