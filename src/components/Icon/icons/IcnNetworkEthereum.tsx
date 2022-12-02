import SVGComponent from '../../../styles/img/assets/icn_network_ethereum.svg?svgComponent'
import React from 'react'
import { IconInterface } from '../../../styles/common'
import { IconWrapper } from '../../../components/Icon/iconStyle'

/**
 * width 56
 * height 18
 * */

const IcnNetworkEthereum = ({ width, height, ...props }: IconInterface) => {
  return (
    <IconWrapper {...props}>
      <SVGComponent width={width ?? '56'} height={height ?? '18'} />
    </IconWrapper>
  )
}

export default IcnNetworkEthereum
