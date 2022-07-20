import { $host } from ".";

export const getTransactions = async (
  skip = 0, 
  limit = 14, 
  transactionId,
  blockNumber,
  senderAddress,
  recipientsAddress
) => {
  const { data } = await $host.get('transactions', {
    params: { 
      limit, 
      skip,
      transactionId,
      blockNumber,
      senderAddress,
      recipientsAddress
    }
  })
  return data;
}

export const getTransactionPagesCount = async () => {
  const { data } = await $host.get('transactions/pages-count')
  return data;
}
