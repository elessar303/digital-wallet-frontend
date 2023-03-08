import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import TYPES from '../actions/types'
import { fetchRates, fetchWallets, saveRate, saveWallet } from '../services/wallets'

export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

export function* getWalletsSaga() {
    try {
        const wallets = yield call(fetchWallets)
        yield put({ type: TYPES.SET_WALLETS, value: wallets })
    } catch (error) {
        console.log(error)
    }
}

export function* getRatesSaga() {
    try {
        const rates = yield call(fetchRates)
        yield put({ type: TYPES.SET_RATES, value: rates })
    } catch (error) {
        console.log(error)
    }
}

export function* addWalletSaga({value}) {
    try {
        yield call(saveWallet, value)
        yield put({ type: TYPES.GET_WALLETS })
    } catch (error) {
        console.log(error)
    }
}

export function* saveRateSaga({value}) {
    try {
        yield call(saveRate, value)
        yield put({ type: TYPES.GET_RATES })
    } catch (error) {
        console.log(error)
    }
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* watchGetWallets() {
    yield takeEvery(TYPES.GET_WALLETS, getWalletsSaga)
}

export function* watchGetRates() {
    yield takeEvery(TYPES.GET_RATES, getRatesSaga)
}

export function* watchAddWallet() {
    yield takeEvery(TYPES.ADD_WALLET, addWalletSaga)
}

export function* watchSaveRate() {
    yield takeEvery(TYPES.SAVE_RATE, saveRateSaga)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        call(watchIncrementAsync),
        call(watchGetWallets),
        call(watchGetRates),
        call(watchAddWallet),
        call(watchSaveRate),
    ])
}