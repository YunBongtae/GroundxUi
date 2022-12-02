import SVGComponent from '../../../styles/img/assets/illust_otpGuide.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 285
 * height 95
 * */

const IllustOtpGuide = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '285'} height={height ?? '95'} />
    </IconWrapper>
  )
}

export default IllustOtpGuide
