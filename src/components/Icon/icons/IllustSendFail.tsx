import SVGComponent from '../../../styles/img/assets/illust_sendFail.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 44
 * height 44
 * */

const IllustSendFail = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '44'} height={height ?? '44'} />
    </IconWrapper>
  )
}

export default IllustSendFail
