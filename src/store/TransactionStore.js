import { makeAutoObservable } from "mobx"

export default class TransactionStore {
  constructor() {
    this._transactions = []
    this._transactionPagesCount = 1
    this._currentPage = 1
    this._limit = 14
    this._skip = 0
    this._transactionId = null
    this._blockNumber = null
    this._senderAddress = null
    this._recipientsAddress = null

    makeAutoObservable(this)
  }

  setTransactions(transactions) {
    this._transactions = transactions
  }

  setTransactionPagesCount(transactionPagesCount) {
    this._transactionPagesCount = transactionPagesCount
  }

  setCurrentPage(currentPage) {
    this._currentPage = currentPage
  }

  setLimit(limit) {
    this._limit = limit
  }

  setSkip(skip) {
    this._skip = skip
  }

  setTransactionId(transactionId) {
    this._transactionId = transactionId
  }

  setBlockNumber(blockNumber) {
    this._blockNumber = blockNumber
  }

  setSenderAddress(senderAddress) {
    this._senderAddress = senderAddress
  }

  setRecipientsAddress(recipientsAddress) {
    this._recipientsAddress = recipientsAddress
  }

  get transactions() {
    return this._transactions
  }

  get transactionPagesCount() {
    return this._transactionPagesCount
  }

  get currentPage() {
    return this._currentPage
  }

  get limit() {
    return this._limit
  }

  get skip() {
    return this._skip
  }

  get transactionId() {
    return this._transactionId
  }

  get blockNumber() {
    return this._blockNumber
  }

  get senderAddress() {
    return this._senderAddress
  }

  get recipientsAddress() {
    return this._recipientsAddress
  }

};
