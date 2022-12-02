import SVGComponent from '../../../styles/img/assets/illust_emptyPush.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 200
 * height 200
 * */

const IllustEmptyPush = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '200'} height={height ?? '200'} />
    </IconWrapper>
  )
}

export default IllustEmptyPush
