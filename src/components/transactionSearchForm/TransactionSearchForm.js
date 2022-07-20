import React, { useContext, useEffect } from 'react';
import './TransactionSearchForm.scss';
import searchButtonIcon from '../../static/searchButtonIcon.svg'
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const TransactionSearchForm = observer(() => {
  const [searchWord, setSearchWord] = React.useState()
  const [searchKey, setSearchKey] = React.useState("blockNumber")

  const { transactionStore } = useContext(Context);

  const submitHandler = (event) => {
    event.preventDefault()

    if (searchWord.trim) {
      if (searchKey === 'blockNumber') {
        transactionStore.setBlockNumber(searchWord.toString())
      }
      if (searchKey === 'transactionId') {
        transactionStore.setTransactionId(searchWord.toString())
      }
      if (searchKey === 'senderAddress') {
        transactionStore.setSenderAddress(searchWord.toString())
      }
      if (searchKey === 'recipientsAddress') {
        transactionStore.setRecipientsAddress(searchWord.toString())
      }  
    }
  }

  useEffect(() => {
    if (transactionStore.transactionId !== null) {
      transactionStore.setBlockNumber(null)
      transactionStore.setSenderAddress(null)
      transactionStore.setRecipientsAddress(null)
    }
  }, [
    transactionStore.transactionId,
  ])

  useEffect(() => {
    if (transactionStore.blockNumber !== null) {
      transactionStore.setTransactionId(null)
      transactionStore.setSenderAddress(null)
      transactionStore.setRecipientsAddress(null)
    }
  }, [
    transactionStore.blockNumber,
  ])

  useEffect(() => {
    if (transactionStore.senderAddress !== null) {
      transactionStore.setBlockNumber(null)
      transactionStore.setTransactionId(null)
      transactionStore.setRecipientsAddress(null)
    }
  }, [
    transactionStore.senderAddress,
  ])

  useEffect(() => {
    if (transactionStore.recipientsAddress !== null) {
      transactionStore.setBlockNumber(null)
      transactionStore.setSenderAddress(null)
      transactionStore.setTransactionId(null)
    }
  }, [
    transactionStore.recipientsAddress,
  ])

  return (
    <div className='searchFormBody'>
      <form onSubmit={submitHandler}>
        <input className='searchInput' value={searchWord} onChange={event => setSearchWord(event.target.value)} placeholder="Search..." />
        <div className='verticalLine'></div>
        <select 
          className='searchParam'
          value={searchKey}
          onChange={event => setSearchKey(event.target.value)} 
        >
          <option value="blockNumber">Block Number</option>
          <option value="transactionId">Transaction ID</option>
          <option value="senderAddress">Sender Address</option>
          <option value="recipientsAddress">Recipients Address</option>
        </select>
        <button type="submit" className='searchSubmitBtn'>
          <img src={searchButtonIcon} alt="searchButtonIcon" />  
        </button>
      </form>
    </div>
  );
});

export default TransactionSearchForm;

