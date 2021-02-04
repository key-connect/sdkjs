

# BlockchainStatusResponse

Represents the status of the block chain. This object is cached as per the `lastCheck` attribute.
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**StatusEnum**](#StatusEnum) | Status of the block chain |  [optional]
**lastCheck** | **String** | UTC timestamp representing when the status was last checked |  [optional]



## Enum: StatusEnum

Name | Value
---- | -----
CONNECTED | &quot;connected&quot;
DISCONNECTED | &quot;disconnected&quot;



