import SVGComponent from '../../../styles/img/assets/illust_disconnect.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 36
 * height 36
 * */

const IllustDisconnect = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '36'} height={height ?? '36'} />
    </IconWrapper>
  )
}

export default IllustDisconnect
