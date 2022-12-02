import SVGComponent from '../../../styles/img/assets/illust_safety.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 240
 * height 240
 * */

const IllustSafety = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '240'} height={height ?? '240'} />
    </IconWrapper>
  )
}

export default IllustSafety
