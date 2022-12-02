import SVGComponent from '../../../styles/img/assets/illust_tokenEmpty.svg'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 24
 * height 24
 * */

const IllustTokenEmpty = ({
  width = '24',
  height = '24',
  ...props
}: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width} height={height} />
    </IconWrapper>
  )
}

export default IllustTokenEmpty
