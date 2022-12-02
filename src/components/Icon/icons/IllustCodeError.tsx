import SVGComponent from '../../../styles/img/assets/illust_codeError.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 104
 * height 104
 * */

const IllustCodeError = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '104'} height={height ?? '104'} />
    </IconWrapper>
  )
}

export default IllustCodeError
