import SVGComponent from '../../../styles/img/assets/icn_keypadDelete_white.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 40
 * height 40
 * */

const IcnKeypadDeleteWhite = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '40'} height={height ?? '40'} />
    </IconWrapper>
  )
}

export default IcnKeypadDeleteWhite
