import SVGComponent from '../../../styles/img/assets/illust_default_collection_2.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 160
 * height 160
 * */

const IllustDefaultCollection2 = ({
  width,
  height,
  ...props
}: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '160'} height={height ?? '160'} />
    </IconWrapper>
  )
}

export default IllustDefaultCollection2
