import SVGComponent from '../../../styles/img/assets/icn_play.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 56
 * height 56
 * */

const IcnPlay = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '56'} height={height ?? '56'} />
    </IconWrapper>
  )
}

export default IcnPlay
