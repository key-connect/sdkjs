

# BlockchainAccountInfo

Represents information regarding a blockchain wallet / account.
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chainId** | [**ChainIdEnum**](#ChainIdEnum) |  |  [optional]
**network** | **String** |  |  [optional]
**server** | **String** |  |  [optional]
**accountId** | **String** |  |  [optional]
**balance** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional]
**value** | [**GenericCurrencyValue**](GenericCurrencyValue.md) |  |  [optional]
**subAccounts** | [**List&lt;SubAccountInfo&gt;**](SubAccountInfo.md) | List of sub accounts and their balances. ERC20 tokens and their balances in case of ethereum. |  [optional]
**lastTransactionId** | **String** |  |  [optional]
**errors** | [**List&lt;ServerErrorObject&gt;**](ServerErrorObject.md) |  |  [optional]



## Enum: ChainIdEnum

Name | Value
---- | -----
XRP | &quot;xrp&quot;
ETH | &quot;eth&quot;
BTC | &quot;btc&quot;



