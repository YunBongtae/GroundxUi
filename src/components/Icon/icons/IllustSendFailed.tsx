import SVGComponent from '../../../styles/img/assets/illust_sendFailed.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 160
 * height 160
 * */

const IllustSendFailed = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '160'} height={height ?? '160'} />
    </IconWrapper>
  )
}

export default IllustSendFailed
