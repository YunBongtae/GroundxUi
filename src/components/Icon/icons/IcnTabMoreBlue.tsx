import SVGComponent from '../../../styles/img/assets/icn_tab_more_blue.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 24
 * height 24
 * */

const IcnTabMoreBlue = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '24'} height={height ?? '24'} />
    </IconWrapper>
  )
}

export default IcnTabMoreBlue
