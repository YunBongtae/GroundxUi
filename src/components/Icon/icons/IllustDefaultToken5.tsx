import SVGComponent from '../../../styles/img/assets/illust_default_token_5.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 24
 * height 24
 * */

const IllustDefaultToken5 = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '24'} height={height ?? '24'} />
    </IconWrapper>
  )
}

export default IllustDefaultToken5
