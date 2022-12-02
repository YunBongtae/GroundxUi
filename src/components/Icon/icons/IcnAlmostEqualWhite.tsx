import SVGComponent from '../../../styles/img/assets/icn_almostEqual_white.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 12
 * height 12
 * */

const IcnAlmostEqualWhite = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '12'} height={height ?? '12'} />
    </IconWrapper>
  )
}

export default IcnAlmostEqualWhite
