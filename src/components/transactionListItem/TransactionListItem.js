import { observer } from 'mobx-react-lite';
import React from 'react';
import './TransactionListItem.scss';

const TransactionListItem = observer (({ transaction: {
  blockNumber,
  transactionId,
  senderAddress,
  recipientsAddress,
  blockInformation,
  date,
  value,
  transactionFee,
}, isPair, isLast }) => {

  return (
    <div className='listItemBody'>

      <div className={(isPair ? 'informPairItem ' : 'informNotPairItem ') + 
        (isLast ? 'lastLeftItemBlock' : '') + ' blockNumberWidth transactionListItemBlock'}>{blockNumber} </div>
      <div className={(isPair ? 'informPairItem' : 'informNotPairItem') + ' transactionIdWidth transactionListItemBlock' }>
        <a href={`https://etherscan.io/tx/${transactionId}`}>{transactionId} </a>
      </div>
      <div className={(isPair ? 'informPairItem' : 'informNotPairItem') + ' senderAddressWidth transactionListItemBlock' }>{senderAddress} </div>
      <div className={(isPair ? 'informPairItem' : 'informNotPairItem') + ' recipientsAddressWidth transactionListItemBlock' }>{recipientsAddress} </div>
      <div className={(isPair ? 'informPairItem' : 'informNotPairItem') + ' blockInformationWidth transactionListItemBlock' }>{blockInformation} </div>
      <div className={(isPair ? 'informPairItem' : 'informNotPairItem') + ' dateWidth transactionListItemBlock' }>{date} </div>
      <div className={(isPair ? 'informPairItem' : 'informNotPairItem') + ' valueWidth transactionListItemBlock' }>{value} </div>
      <div className={(isPair ? 'informPairItem ' : 'informNotPairItem ') +
        (isLast ? 'lastRightItemBlock' : '') + ' transactionFeeWidth transactionListItemBlock'}>{transactionFee} </div>

    </div>
  );
});

export default TransactionListItem;
