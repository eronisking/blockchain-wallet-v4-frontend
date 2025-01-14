export enum WalletEarnEvents {
  // DETAIL: User visualises the successful transfer of a deposit.
  WALLET_ACTIVE_REWARDS_DEPOSIT_SUCCESS_VIEWED = 'Wallet Active Rewards Deposit Success Viewed',
  // ADD: User clicks on transfer on the deposit page.\
  WALLET_ACTIVE_REWARDS_DEPOSIT_TRANSFER_CLICKED = 'Wallet Active Rewards Deposit Transfer Clicked',
  // ADD: User visualises the page where user add balance to the staking account.
  WALLET_ACTIVE_REWARDS_DEPOSIT_VIEWED = 'Active Rewards Deposit Viewed',
  // EARN HOMEPAGE: User clicks in a Active Rewards token in the earn page.
  WALLET_ACTIVE_REWARDS_DETAIL_CLICKED = 'Wallet Active Rewards Detail Clicked',
  // DETAIL: User clicks in the deposit button in the staking detail view.
  WALLET_ACTIVE_REWARDS_DETAIL_DEPOSIT_CLICKED = 'Wallet Active Rewards Detail Deposit Clicked',
  // DETAIL: User visualises the detail of a specific token’s staking account. Balance, accruals, and CTA are shown here.
  WALLET_ACTIVE_REWARDS_DETAIL_VIEWED = 'Wallet Active Rewards Detail Viewed',
  // LEARNING: User clicks to go to active rewards learning page.
  WALLET_ACTIVE_REWARDS_LEARNING_PAGE_CLICKED = 'Wallet Active Rewards Learning Page Clicked',
  // LEARNING: User clicks on get started on active rewards learning page.
  WALLET_ACTIVE_REWARDS_LEARNING_PAGE_GET_STARTED_CLICKED = 'Wallet Active Rewards Warning Continue Viewed',
  // LEARNING: User view active rewards learning page.
  WALLET_ACTIVE_REWARDS_LEARNING_PAGE_VIEWED = 'Wallet Active Rewards Warning Continue Viewed',
  // Active Rewards Modal: User clicks continue button
  WALLET_ACTIVE_REWARDS_WARNING_CONTINUE_CLICKED = 'Wallet Active Rewards Warning Continue Clicked',
  // WITHDRAW: User clicks on transfer on the active rewards withdrawal page.
  WALLET_ACTIVE_REWARDS_WITHDRAWAL_REQUESTED_VIEWED = 'Wallet Active Rewards Withdrawal Requested Viewed',
  // WITHDRAW: User clicks on transfer on the active rewards withdrawal page.
  WALLET_ACTIVE_REWARDS_WITHDRAW_TRANSFER_CLICKED = 'Wallet Active Rewards Withdraw Transfer Clicked',

  // BUY: Wallet. The user clicks the buy earn rewards button.
  WALLET_BUY_EARN_REWARDS_CLICKED = 'Wallet Buy Earn Rewards Clicked',
  // BUY: Wallet. What the user sees after the wallet clicks the Buy Earn Rewards Button
  WALLET_BUY_EARN_REWARDS_VIEWED = 'Wallet Buy Earn Rewards Viewed',

  // EARN: The user clicks compare on Earn page
  WALLET_EARN_COMPARE_PRODUCTS_CLICKED = 'Wallet Earn Compare Products Clicked',

  // ADD: User changes the wallet on the interest deposit page.
  WALLET_REWARDS_DEPOSIT_CHANGE_WALLET_CLICKED = 'Wallet Rewards Deposit Change Wallet Clicked',
  // ADD: User clicks on transfer on the deposit page.
  WALLET_REWARDS_DEPOSIT_TRANSFER_CLICKED = 'Wallet Rewards Deposit Transfer Clicked',
  // ADD: User visualises the page where he add balance to the rewards account.
  WALLET_REWARDS_DEPOSIT_VIEWED = 'Interest Deposit Viewed',
  // DETAIL: User clicks in the buy button in the interest detail view.
  WALLET_REWARDS_DETAIL_BUY_CLICKED = 'Wallet Rewards Detail Buy Clicked',
  // EARN HOMEPAGE: User clicks in an interest token in the earn page.
  WALLET_REWARDS_DETAIL_CLICKED = 'Wallet Rewards Detail Clicked',
  // DETAIL: User clicks in the deposit button in the interest detail view.
  WALLET_REWARDS_DETAIL_DEPOSIT_CLICKED = 'Wallet Rewards Detail Deposit Clicked',
  // DETAIL: User visualises the detail of a specific token’s rewards account. Balance, accruals, and CTA are shown here.
  WALLET_REWARDS_DETAIL_VIEWED = 'Wallet Rewards Detail Viewed',
  // ADD: Should be triggered whenever a user clicks on both boxes, not when the transfer is triggered.
  WALLET_REWARDS_SUBMIT_INFORMATION_CLICKED = 'Wallet Rewards Submit Information Clicked',
  // EARN HOMEPAGE: User clicks in the button to visualise his Interest transaction history.
  WALLET_REWARDS_TRANSACTION_HISTORY_CLICKED = 'Wallet Rewards Transaction History Clicked',
  // EARN HOMEPAGE: User click on the download button in transaction history.
  WALLET_REWARDS_TRANSACTION_HISTORY_DOWNLOAD_CLICKED = 'Wallet Rewards Transaction History Download Clicked',
  // WITHDRAW: User changes the wallet on the interest withdrawal page.
  WALLET_REWARDS_WITHDRAW_CHANGE_WALLET_CLICKED = 'Wallet Rewards Withdraw Change Wallet Clicked',
  // WITHDRAW: User clicks in Max amount button in the withdrawal page.
  WALLET_REWARDS_WITHDRAW_MAX_AMOUNT_CLICKED = 'Wallet Rewards Withdraw Max Amount Clicked',
  // WITHDRAW: User clicks on transfer on the withdrawal page.
  WALLET_REWARDS_WITHDRAW_TRANSFER_CLICKED = 'Wallet Rewards Withdraw Transfer Clicked',

  // DETAIL: User visualises the successful transfer of a deposit.
  WALLET_STAKING_DEPOSIT_SUCCESS_VIEWED = 'Wallet Staking Deposit Success Viewed',
  // ADD: User clicks on transfer on the deposit page.\
  WALLET_STAKING_DEPOSIT_TRANSFER_CLICKED = 'Wallet Staking Deposit Transfer Clicked',
  // ADD: User visualises the page where user add balance to the staking account.
  WALLET_STAKING_DEPOSIT_VIEWED = 'Staking Deposit Viewed',
  // EARN HOMEPAGE: User clicks in a Staking token in the earn page.
  WALLET_STAKING_DETAIL_CLICKED = 'Wallet Staking Detail Clicked',
  // DETAIL: User clicks in the deposit button in the staking detail view.
  WALLET_STAKING_DETAIL_DEPOSIT_CLICKED = 'Wallet Staking Detail Deposit Clicked',
  // DETAIL: User visualises the detail of a specific token’s staking account. Balance, accruals, and CTA are shown here.
  WALLET_STAKING_DETAIL_VIEWED = 'Wallet Staking Detail Viewed',
  // Staking Modal: User clicks continue button
  WALLET_STAKING_WARNING_CONTINUE_CLICKED = 'Wallet Staking Warning Continue Clicked'
}

// EARN HOMEPAGE
type WalletRewardsEarn = {
  key:
    | WalletEarnEvents.WALLET_REWARDS_DETAIL_CLICKED
    | WalletEarnEvents.WALLET_STAKING_DETAIL_CLICKED
    | WalletEarnEvents.WALLET_ACTIVE_REWARDS_DETAIL_CLICKED
    | WalletEarnEvents.WALLET_STAKING_WARNING_CONTINUE_CLICKED
    | WalletEarnEvents.WALLET_ACTIVE_REWARDS_WARNING_CONTINUE_CLICKED
    | WalletEarnEvents.WALLET_REWARDS_TRANSACTION_HISTORY_DOWNLOAD_CLICKED
  properties: {
    currency: string
  }
}

type WalletRewardsTransactionHistoryClicked = {
  key: WalletEarnEvents.WALLET_REWARDS_TRANSACTION_HISTORY_CLICKED
  properties: {}
}

// DETAIL
type WalletRewardsDetail = {
  key:
    | WalletEarnEvents.WALLET_REWARDS_DETAIL_BUY_CLICKED
    | WalletEarnEvents.WALLET_REWARDS_DETAIL_DEPOSIT_CLICKED
    | WalletEarnEvents.WALLET_STAKING_DETAIL_DEPOSIT_CLICKED
    | WalletEarnEvents.WALLET_ACTIVE_REWARDS_DETAIL_DEPOSIT_CLICKED
    | WalletEarnEvents.WALLET_REWARDS_DETAIL_VIEWED
    | WalletEarnEvents.WALLET_STAKING_DETAIL_VIEWED
    | WalletEarnEvents.WALLET_STAKING_DEPOSIT_SUCCESS_VIEWED
    | WalletEarnEvents.WALLET_ACTIVE_REWARDS_DETAIL_VIEWED
    | WalletEarnEvents.WALLET_ACTIVE_REWARDS_LEARNING_PAGE_GET_STARTED_CLICKED
    | WalletEarnEvents.WALLET_ACTIVE_REWARDS_DEPOSIT_SUCCESS_VIEWED
  properties: {
    currency: string
  }
}

type WalletActiveRewardsLearning = {
  key:
    | WalletEarnEvents.WALLET_ACTIVE_REWARDS_LEARNING_PAGE_CLICKED
    | WalletEarnEvents.WALLET_ACTIVE_REWARDS_LEARNING_PAGE_VIEWED
  properties: {}
}

// ADD
type WalletRewardsDepositChangeWalletClicked = {
  key: WalletEarnEvents.WALLET_REWARDS_DEPOSIT_CHANGE_WALLET_CLICKED
  properties: {
    currency: string
  }
}

type WalletRewardsDepositTransferClicked = {
  key: WalletEarnEvents.WALLET_REWARDS_DEPOSIT_TRANSFER_CLICKED
  properties: {
    amount: number
    amount_usd: number
    currency: string
    type: 'TRADING' | 'USERKEY'
  }
}

type WalleRewardsDepositTransfer = {
  key:
    | WalletEarnEvents.WALLET_ACTIVE_REWARDS_DEPOSIT_TRANSFER_CLICKED
    | WalletEarnEvents.WALLET_STAKING_DEPOSIT_TRANSFER_CLICKED
  properties: {
    amount: string
    amount_usd: string
    currency: string
    type: 'TRADING' | 'USERKEY'
  }
}

type WalletRewardsDeposit = {
  key:
    | WalletEarnEvents.WALLET_REWARDS_DEPOSIT_VIEWED
    | WalletEarnEvents.WALLET_STAKING_DEPOSIT_VIEWED
    | WalletEarnEvents.WALLET_ACTIVE_REWARDS_DEPOSIT_VIEWED
  properties: {
    currency?: string
    path?: string
    referrer?: string
    search?: string
    title?: string
    url?: string
  }
}

type WalletRewardsSubmitInformationClicked = {
  key: WalletEarnEvents.WALLET_REWARDS_SUBMIT_INFORMATION_CLICKED
  properties: {
    currency: string
    origin: 'SAVINGS_CONFIRMATION' | 'SAVINGS_PAGE'
  }
}

// WITHDRAW
type WalletWithdraw = {
  key:
    | WalletEarnEvents.WALLET_REWARDS_WITHDRAW_CHANGE_WALLET_CLICKED
    | WalletEarnEvents.WALLET_REWARDS_WITHDRAW_MAX_AMOUNT_CLICKED
    | WalletEarnEvents.WALLET_ACTIVE_REWARDS_WITHDRAWAL_REQUESTED_VIEWED
  properties: {
    currency: string
  }
}

type WalletRewardsWithdrawTransferClicked = {
  key: WalletEarnEvents.WALLET_REWARDS_WITHDRAW_TRANSFER_CLICKED
  properties: {
    amount: string
    amount_usd: string
    currency: string
    type: 'TRADING' | 'USERKEY'
  }
}

type WalletActiveRewardsWithdrawTransferClicked = {
  key: WalletEarnEvents.WALLET_ACTIVE_REWARDS_WITHDRAW_TRANSFER_CLICKED
  properties: {
    amount: string
    amount_usd: string
    currency: string
    type: 'TRADING'
  }
}

// BUY
type WalletBuy = {
  key:
    | WalletEarnEvents.WALLET_BUY_EARN_REWARDS_CLICKED
    | WalletEarnEvents.WALLET_BUY_EARN_REWARDS_VIEWED
    | WalletEarnEvents.WALLET_EARN_COMPARE_PRODUCTS_CLICKED
  properties: {}
}

export type WalletEarnActions =
  | WalleRewardsDepositTransfer
  | WalletActiveRewardsLearning
  | WalletActiveRewardsWithdrawTransferClicked
  | WalletBuy
  | WalletRewardsDeposit
  | WalletRewardsDepositChangeWalletClicked
  | WalletRewardsDepositTransferClicked
  | WalletRewardsDetail
  | WalletRewardsEarn
  | WalletRewardsSubmitInformationClicked
  | WalletRewardsTransactionHistoryClicked
  | WalletRewardsWithdrawTransferClicked
  | WalletWithdraw
