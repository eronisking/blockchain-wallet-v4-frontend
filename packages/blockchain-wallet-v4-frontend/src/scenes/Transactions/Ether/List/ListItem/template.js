import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import moment from 'moment'

import { Button, ConfirmationGauge, Icon, Tooltip, Text } from 'blockchain-info-components'
import CurrencyDisplay from 'components/CurrencyDisplay'
import CoinDisplay from 'components/CoinDisplay'
import { Transaction, TransactionRow, TransactionRowAddresses, TransactionRowAmount, TransactionRowDescription,
  TransactionRowStatus, TransactionRowToggler, TransactionDetails, TransactionDetailsAddresses,
  TransactionDetailsDescription, TransactionDetailsStatus, TransactionDetailsValue } from 'components/TransactionItem'

const TransactionTooltip = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
`

const selectColors = type => {
  switch (type) {
    case 'Sent': return 'sent'
    case 'Transferred': return 'transferred'
    case 'Received': return 'received'
    default: return ''
  }
}

const TransactionListItem = (props) => {
  const { coinDisplayed, toggled, handleToggle, handleClick, transaction } = props
  const now = moment()
  const date = moment.utc(transaction.time * 1000)
  const formattedDate = (date.year() === now.year())
    ? date.format('MMMM D @kk:mm')
    : date.format('MMMM D YYYY @kk:mm')

  return (
    <Transaction>
      <TransactionRow>
        <TransactionRowToggler toggled={toggled} onClick={handleToggle} />
        <TransactionRowStatus>
          <Text weight={500} color={selectColors(transaction.type)} uppercase>
            { transaction.type === 'Sent' && <FormattedMessage id='scenes.transactions.list.transactionlistitem.sent' defaultMessage='Sent' /> }
            { transaction.type === 'Received' && <FormattedMessage id='scenes.transactions.list.transactionlistitem.received' defaultMessage='Received' /> }
            { transaction.type === 'Transferred' && <FormattedMessage id='scenes.transactions.list.transactionlistitem.transferred' defaultMessage='Transferred' /> }
          </Text>
          <Text size='12px' weight={300} italic>{formattedDate}</Text>
        </TransactionRowStatus>
        <TransactionRowAddresses>
          <Text size='14px' weight={300}>
            <FormattedMessage id='scenes.transactions.list.transactionlistitem.to' defaultMessage='To : {to}' values={{ to: transaction.to }} />
          </Text>
          <Text size='14px' weight={300}>
            <FormattedMessage id='scenes.transactions.list.transactionlistitem.from' defaultMessage='From : {from}' values={{ from: transaction.from }} />
          </Text>
        </TransactionRowAddresses>
        <TransactionRowDescription>
          { transaction.description !== ''
            ? <Text size='14px' weight={300}>
              <FormattedMessage id='scenes.transactions.list.transactionlistitem.description' defaultMessage='Description: {description}' values={{ description: transaction.description }} />
              <Icon name='pencil' size='14px' />
            </Text>
            : <Text size='14px' weight={300}>
              <FormattedMessage id='scenes.transactions.list.transactionlistitem.adddescription' defaultMessage='Add a description' />
              <Icon name='pencil' size='14px' />
            </Text>
          }
        </TransactionRowDescription>
        <TransactionRowAmount>
          <Button nature={transaction.type.toLowerCase()} onClick={handleClick} fullwidth>
            { coinDisplayed
              ? <CoinDisplay coin='ETH'>{transaction.amount}</CoinDisplay>
              : <CurrencyDisplay coin='ETH'>{transaction.amount}</CurrencyDisplay>
            }
          </Button>
        </TransactionRowAmount>
      </TransactionRow>
      <TransactionDetails toggled={toggled}>
        <TransactionDetailsStatus>
          { transaction.confirmations > 3 && <FormattedMessage id='scenes.transactions.list.transactionlistitem.transaction_confirmed' defaultMessage='Transaction confirmed' /> }
          { transaction.confirmations <= 3 &&
            <TransactionTooltip>
              <ConfirmationGauge nbConfirmations={transaction.confirmations} />
              <Tooltip>
                {transaction.confirmations === 0 && <FormattedMessage id='scenes.transactions.list.transactionlistitem.transaction_unconfirmed' defaultMessage='Your transaction is actually unconfirmed.' />}
                {transaction.confirmations === 1 && <FormattedMessage id='scenes.transactions.list.transactionlistitem.transaction_confirmed_1' defaultMessage='Your transaction confirmation is in progress (1 block ahead).' />}
                {transaction.confirmations === 2 && <FormattedMessage id='scenes.transactions.list.transactionlistitem.transaction_confirmed_2' defaultMessage='Your transaction confirmation is in progress (2 blocks ahead).' />}
                {transaction.confirmations === 3 && <FormattedMessage id='scenes.transactions.list.transactionlistitem.transaction_confirmed_3' defaultMessage='Your transaction is confirmed (3 blocks ahead).' />}
              </Tooltip>
            </TransactionTooltip>
          }
        </TransactionDetailsStatus>
        <TransactionDetailsAddresses>
          <Text size='14px' weight={300}>
            <FormattedMessage id='scenes.transactions.list.transactionlistitem.to' defaultMessage='To : {to}' values={{ to: transaction.to }} />
          </Text>
          <Text size='14px' weight={300}>
            <FormattedMessage id='scenes.transactions.list.transactionlistitem.from' defaultMessage='From : {from}' values={{ from: transaction.from }} />
          </Text>
        </TransactionDetailsAddresses>
        <TransactionDetailsDescription>
          {transaction.description !== ''
            ? <Text size='14px' weight={300}>
              <FormattedMessage id='scenes.transactions.list.transactionlistitem.description' defaultMessage='Description: {description}' values={{ description: transaction.description }} />
              <Icon name='pencil' size='14px' />
            </Text>
            : <Text size='14px' weight={300}>
              <FormattedMessage id='scenes.transactions.list.transactionlistitem.adddescription' defaultMessage='Add a description' />
              <Icon name='pencil' size='14px' />
            </Text>
          }
        </TransactionDetailsDescription>
        <TransactionDetailsValue />
      </TransactionDetails>
    </Transaction>
  )
}

TransactionListItem.propTypes = {
  toggled: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    to: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    description: PropTypes.string,
    initial_value: PropTypes.string
  })
}

export default TransactionListItem
