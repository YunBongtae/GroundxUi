import SVGComponent from '../../../styles/img/assets/icn_copy_white.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 16
 * height 16
 * */

const IcnCopyWhite = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '16'} height={height ?? '16'} />
    </IconWrapper>
  )
}

export default IcnCopyWhite
