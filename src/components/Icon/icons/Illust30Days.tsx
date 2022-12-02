import SVGComponent from '../../../styles/img/assets/illust_30days.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 36
 * height 36
 * */

const Illust30days = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '36'} height={height ?? '36'} />
    </IconWrapper>
  )
}

export default Illust30days
