

# BlockchainAccountPayments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chainId** | [**ChainIdEnum**](#ChainIdEnum) |  |  [optional]
**network** | **String** |  |  [optional]
**server** | **String** |  |  [optional]
**accountId** | **String** |  |  [optional]
**cursor** | **String** | Format varies by the blockchain. For XRP, the value of &#x60;cursor&#x60; will be the &#x60;ledger:seq&#x60; from the marker object. This value is null when there are no more pages. |  [optional]
**payments** | [**List&lt;BlockchainAccountPaymentItem&gt;**](BlockchainAccountPaymentItem.md) |  |  [optional]



## Enum: ChainIdEnum

Name | Value
---- | -----
XRP | &quot;xrp&quot;
ETH | &quot;eth&quot;
BTC | &quot;btc&quot;



