

# AccountsInfoRequestItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chainId** | [**ChainIdEnum**](#ChainIdEnum) | ID of the block chain | 
**network** | **String** |  Blockchain network to get the account info from. For XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. This field is required if &#x60;fee&#x60; is not specified in order to dynamically obtain the fee from the network.  |  [optional]
**accountId** | **String** | Identifier representing the account. This is most likely the wallet address. | 



## Enum: ChainIdEnum

Name | Value
---- | -----
XRP | &quot;xrp&quot;
ETH | &quot;eth&quot;



