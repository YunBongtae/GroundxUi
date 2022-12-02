import SVGComponent from '../../../styles/img/assets/illust_easymanage.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 280
 * height 280
 * */

const IllustEasymanage = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '280'} height={height ?? '280'} />
    </IconWrapper>
  )
}

export default IllustEasymanage
