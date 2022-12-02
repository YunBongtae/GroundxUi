import SVGComponent from '../../../styles/img/assets/illust_safewallet.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 280
 * height 280
 * */

const IllustSafewallet = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '280'} height={height ?? '280'} />
    </IconWrapper>
  )
}

export default IllustSafewallet
