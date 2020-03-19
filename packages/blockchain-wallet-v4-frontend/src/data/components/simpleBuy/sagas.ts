import * as A from './actions'
import * as S from './selectors'
import { actions, selectors } from 'data'
import { APIType } from 'core/network/api'
import { call, put, select } from 'redux-saga/effects'
import {
  convertBaseToStandard,
  convertStandardToBase
} from '../exchange/services'
import { errorHandler } from '../helpers'
import { FiatEligibleType } from 'core/types'
import { getCoinFromPair, getFiatFromPair, NO_PAIR_SELECTED } from './model'
import { SBCheckoutFormValuesType } from './types'
import profileSagas from '../../modules/profile/sagas'

export default ({
  api,
  coreSagas,
  networks
}: {
  api: APIType
  coreSagas: any
  networks: any
}) => {
  const { createUser, waitForUserData } = profileSagas({
    api,
    coreSagas,
    networks
  })

  const createSBOrder = function * () {
    try {
      const values: SBCheckoutFormValuesType = yield select(
        selectors.form.getFormValues('simpleBuyCheckout')
      )
      const pair = values.pair
      const amount = convertStandardToBase('FIAT', values.amount)
      // TODO: Simple Buy - make dynamic
      const action = 'BUY'
      if (!pair) throw new Error(NO_PAIR_SELECTED)
      yield put(actions.form.startSubmit('simpleBuyCheckout'))
      const order = yield call(
        api.createSBOrder,
        pair.pair,
        action,
        { amount, symbol: getFiatFromPair(pair) },
        { symbol: getCoinFromPair(pair) }
      )
      yield put(actions.form.stopSubmit('simpleBuyCheckout'))
    } catch (e) {
      const error = errorHandler(e)
      yield put(actions.form.stopSubmit('simpleBuyCheckout', { _error: error }))
    }
  }

  const fetchSBFiatEligible = function * ({
    currency
  }: ReturnType<typeof A.fetchSBFiatEligible>) {
    try {
      yield put(A.fetchSBFiatEligibleLoading())
      const fiatEligible: FiatEligibleType = yield call(
        api.getSBFiatEligible,
        currency
      )
      yield put(A.fetchSBFiatEligibleSuccess(fiatEligible))
    } catch (e) {
      const error = errorHandler(e)
      yield put(A.fetchSBFiatEligibleFailure(error))
    }
  }

  const fetchSBPairs = function * ({
    currency
  }: ReturnType<typeof A.fetchSBPairs>) {
    try {
      yield put(A.fetchSBPairsLoading())
      const { pairs } = yield call(api.getSBPairs, currency)
      yield put(A.fetchSBPairsSuccess(pairs))
    } catch (e) {
      const error = errorHandler(e)
      yield put(A.fetchSBPairsFailure(error))
    }
  }

  const handleSBSuggestedAmountClick = function * ({
    payload
  }: ReturnType<typeof A.handleSBSuggestedAmountClick>) {
    const { amount } = payload
    const standardAmt = convertBaseToStandard('FIAT', amount)

    yield put(actions.form.change('simpleBuyCheckout', 'amount', standardAmt))
  }

  const initializeCheckout = function * ({
    pairs
  }: ReturnType<typeof A.initializeCheckout>) {
    try {
      yield call(createUser)
      yield call(waitForUserData)
      const fiatCurrency = S.getFiatCurrency(yield select())
      if (!fiatCurrency) throw new Error('NO_FIAT_CURRENCY')
      yield put(A.fetchSBSuggestedAmountsLoading())
      const amounts = yield call(api.getSBSuggestedAmounts, fiatCurrency)
      yield put(A.fetchSBSuggestedAmountsSuccess(amounts))
      yield put(
        actions.form.initialize('simpleBuyCheckout', { pair: pairs[0] })
      )
    } catch (e) {
      const error = errorHandler(e)
      yield put(A.fetchSBSuggestedAmountsFailure(error))
    }
  }

  return {
    createSBOrder,
    fetchSBPairs,
    fetchSBFiatEligible,
    handleSBSuggestedAmountClick,
    initializeCheckout
  }
}
