

# BlockchainAccountPaymentItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | One of &#x60;success&#x60;, &#x60;failure&#x60; or &#x60;pending&#x60; in most cases. In case the server returns unusual status, this attribute will reflect the raw value. |  [optional]
**sourceAccount** | **String** |  |  [optional]
**destinationAccount** | **String** |  |  [optional]
**destinationTag** | **String** |  |  [optional]
**fee** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional]
**amount** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional]
**value** | [**GenericCurrencyValue**](GenericCurrencyValue.md) |  |  [optional]
**hash** | **String** |  |  [optional]



