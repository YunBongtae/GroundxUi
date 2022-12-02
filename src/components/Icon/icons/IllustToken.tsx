import SVGComponent from '../../../styles/img/assets/illust_token.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 36
 * height 36
 * */

const IllustToken = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '36'} height={height ?? '36'} />
    </IconWrapper>
  )
}

export default IllustToken
