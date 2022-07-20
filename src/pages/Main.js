import React from 'react'
import PaginationPages from '../components/paginationPages/PaginationPages'
import TransactionList from '../components/transactionList/TransactionList'
import TransactionSearchForm from '../components/transactionSearchForm/TransactionSearchForm'

export default function Main() {
  return (
    <div>
      <TransactionSearchForm />
      <TransactionList />
      <PaginationPages />
    </div>
  )
}
