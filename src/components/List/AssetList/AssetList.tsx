import React from 'react'
import {
  AmountText,
  AssetDetailWrapper,
  AssetImage,
  AssetListInnerWrapper,
  AssetListWrapper,
  NameText,
} from 'component/common/List/AssetList/assetListStyle'
import { illustTokenEmpty } from 'styles/img'

export interface AssetListInterface {
  assetImageSrc: string
  name: string
  amount: string
  symbol: string
  onClick: () => void
}

const AssetList = ({
  assetImageSrc,
  name,
  amount,
  symbol,
  onClick,
}: AssetListInterface) => {
  return (
    <AssetListWrapper onClick={onClick} data-cy={`asset-list-${name}`}>
      <AssetListInnerWrapper>
        <AssetImage
          src={assetImageSrc}
          onError={(e) => (e.currentTarget.src = illustTokenEmpty)}
        />
        <AssetDetailWrapper>
          <NameText>{name}</NameText>
          <AmountText>
            {amount} {symbol}
          </AmountText>
        </AssetDetailWrapper>
      </AssetListInnerWrapper>
    </AssetListWrapper>
  )
}

export default AssetList
