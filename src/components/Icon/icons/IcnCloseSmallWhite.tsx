import SVGComponent from '../../../styles/img/assets/icn_closeSmall_white.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 14
 * height 14
 * */

const IcnCloseSmallWhite = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '14'} height={height ?? '14'} />
    </IconWrapper>
  )
}

export default IcnCloseSmallWhite
