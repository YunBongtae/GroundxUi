import SVGComponent from '../../../styles/img/assets/illust_price.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 44
 * height 44
 * */

const IllustPrice = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '44'} height={height ?? '44'} />
    </IconWrapper>
  )
}

export default IllustPrice
