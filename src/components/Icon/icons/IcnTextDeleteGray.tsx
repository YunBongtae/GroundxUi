import SVGComponent from '../../../styles/img/assets/icn_textDelete_gray.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 16
 * height 16
 * */

const IcnTextDeleteGray = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '16'} height={height ?? '16'} />
    </IconWrapper>
  )
}

export default IcnTextDeleteGray
