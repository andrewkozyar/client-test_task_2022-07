import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../..';
import { getTransactions } from '../../http/transactionApi';
import TransactionListItem from '../transactionListItem/TransactionListItem';
import './TransactionList.scss';

const TransactionList = observer( () => {
  const { transactionStore } = useContext(Context);

  useEffect(() => {
    getTransactions().then(data => {
      transactionStore.setTransactions(data.transactions)  
      transactionStore.setTransactionPagesCount(data.transactionPagesCount)
    })
  }, [])

  useEffect(() => {
    getTransactions(
      (transactionStore.currentPage - 1) * transactionStore.limit, 
      transactionStore.limit,
      transactionStore.transactionId,
      transactionStore.blockNumber,
      transactionStore.senderAddress,
      transactionStore.recipientsAddress,
    ).then(data => {
      transactionStore.setTransactions(data.transactions)
      transactionStore.setTransactionPagesCount(data.transactionPagesCount)
    })
  }, [
    transactionStore.currentPage, 
    transactionStore.limit,
    transactionStore.transactionId,
    transactionStore.blockNumber,
    transactionStore.senderAddress,
    transactionStore.recipientsAddress,
  ])

  return (
    <div className='listBody'>
      <div className='listHeader'>
        <div className='blockNumberWidth informTitleValue firstLeftItemBlock'>Block number</div>
        <div className='transactionIdWidth informTitleValue'>Transaction ID</div>
        <div className='senderAddressWidth informTitleValue'>Sender address</div>
        <div className='recipientsAddressWidth informTitleValue'>Recipients address</div>
        <div className='blockInformationWidth informTitleValue'>Block information</div>
        <div className='dateWidth informTitleValue'>Date</div>
        <div className='valueWidth informTitleValue'>Value</div>
        <div className='transactionFeeWidth informTitleValue firstRightItemBlock'>Transaction Fee</div>
      </div>

      {
        transactionStore.transactions.length ?
        transactionStore.transactions.map((transaction, i) => {
          return <TransactionListItem 
            key={i} 
            transaction={transaction} 
            isPair={i % 2 === 0 ? false : true} 
            isLast={transactionStore.transactions.length - 1 === i}
          />
        }) :
        <div className='noTransactions' > No such transactions exist </div>
      }

    </div>
  );
});

export default TransactionList;
