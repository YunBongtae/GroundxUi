import SVGComponent from '../../../styles/img/assets/illust_expiredNFT.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 120
 * height 120
 * */

const IllustExpiredNFT = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '120'} height={height ?? '120'} />
    </IconWrapper>
  )
}

export default IllustExpiredNFT
