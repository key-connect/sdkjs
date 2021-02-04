

# ServerStatusResponse

Represents the status of the Key Connect server.
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**StatusEnum**](#StatusEnum) | Status of the server |  [optional]
**errors** | [**List&lt;ServerStatusResponseErrors&gt;**](ServerStatusResponseErrors.md) | Any server errors if the server is unhealthy |  [optional]



## Enum: StatusEnum

Name | Value
---- | -----
HEALTHY | &quot;healthy&quot;
UNHEALTHY | &quot;unhealthy&quot;



