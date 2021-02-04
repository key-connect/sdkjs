

# ServerStatusResponseErrors

Array object
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**CategoryEnum**](#CategoryEnum) | Error category |  [optional]
**severity** | [**SeverityEnum**](#SeverityEnum) | Error severity |  [optional]
**message** | **String** | Error message |  [optional]



## Enum: CategoryEnum

Name | Value
---- | -----
BLOCKCHAIN | &quot;blockchain&quot;
DATABASE | &quot;database&quot;
INTERNAL | &quot;internal&quot;



## Enum: SeverityEnum

Name | Value
---- | -----
CRITICAL | &quot;critical&quot;
HIGH | &quot;high&quot;
MEDIUM | &quot;medium&quot;
LOW | &quot;low&quot;
WARNING | &quot;warning&quot;
INFO | &quot;info&quot;



