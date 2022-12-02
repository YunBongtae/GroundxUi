import SVGComponent from '../../../styles/img/assets/icn_edit_gray.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 20
 * height 20
 * */

const IcnEditGray = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '20'} height={height ?? '20'} />
    </IconWrapper>
  )
}

export default IcnEditGray
