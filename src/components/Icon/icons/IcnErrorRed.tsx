import SVGComponent from '../../../styles/img/assets/icn_error_red.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 12
 * height 12
 * */

const IcnErrorRed = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '12'} height={height ?? '12'} />
    </IconWrapper>
  )
}

export default IcnErrorRed
