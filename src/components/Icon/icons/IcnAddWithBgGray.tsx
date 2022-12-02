import SVGComponent from '../../../styles/img/assets/icn_addWithBg_gray.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 22
 * height 22
 * */

const IcnAddWithBgGray = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '22'} height={height ?? '22'} />
    </IconWrapper>
  )
}

export default IcnAddWithBgGray
