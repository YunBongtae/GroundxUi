import SVGComponent from '../../../styles/img/assets/icn_keypadDelete_gray.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 40
 * height 40
 * */

const IcnKeypadDeleteGray = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '40'} height={height ?? '40'} />
    </IconWrapper>
  )
}

export default IcnKeypadDeleteGray
