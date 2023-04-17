import React from 'react'
import { Flex, Padding, SemanticColors, Text } from '@blockchain-com/constellation'

import type { DexTokenWithBalance } from '@core/network/api/dex'
import type { CoinType } from '@core/types'
import { Image, TooltipHost } from 'blockchain-info-components'
import CoinDisplay from 'components/Display/CoinDisplay'
import FiatDisplay from 'components/Display/FiatDisplay'

import { TokenName, ViewEtherscan } from '../components'
import {
  TokenBalanceColumn,
  TokenDetails,
  TokenIcon,
  TokenListWrapper,
  TokenRow
} from '../components/styles'

type Props = {
  children?: React.ReactNode | React.ReactNode[]
  data: DexTokenWithBalance[]
  onTokenSelect: (token: string) => void
  walletCurrency: string
}

export const TokenList = ({ children, data, onTokenSelect, walletCurrency }: Props) => {
  return (
    <TokenListWrapper>
      {data.map((token) => (
        <TokenRow key={token.symbol} onClick={() => onTokenSelect(token.symbol)}>
          <TokenIcon name={token.symbol as CoinType} size='24px' />
          <TokenDetails>
            <Flex flexDirection='column'>
              <TokenName token={token} />
              <Flex alignItems='center'>
                <Text color={SemanticColors.muted} variant='paragraph1'>
                  {token.symbol}
                </Text>
                <Padding left={0.5} />
                <ViewEtherscan tokenAddress={token.address} />
                <Padding left={0.5} />
                <TooltipHost id='tooltip.dex.verification-checkmark' value='5'>
                  <Image name='dex-verification-check' size='15px' />
                </TooltipHost>
              </Flex>
            </Flex>
            <TokenBalanceColumn>
              <FiatDisplay
                coin={token.symbol}
                color='textBlack'
                currency={walletCurrency}
                cursor='pointer'
                data-e2e={`${token.symbol}FiatBalance`}
                lineHeight='150%'
                loadingHeight='20px'
                size='16px'
                weight={600}
              >
                {token.balance}
              </FiatDisplay>
              <CoinDisplay
                coin={token.symbol}
                color='grey600'
                cursor='pointer'
                data-e2e={`${token.symbol}Balance`}
                lineHeight='20px'
                size='14px'
                weight={500}
              >
                {token.balance}
              </CoinDisplay>
            </TokenBalanceColumn>
          </TokenDetails>
        </TokenRow>
      ))}
      {children}
    </TokenListWrapper>
  )
}
