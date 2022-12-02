import SVGComponent from '../../../styles/img/assets/icn_secure_black.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 32
 * height 32
 * */

const IcnSecureBlack = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '32'} height={height ?? '32'} />
    </IconWrapper>
  )
}

export default IcnSecureBlack
