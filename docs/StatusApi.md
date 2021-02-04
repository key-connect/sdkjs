# StatusApi

All URIs are relative to *https://api.keyconnect.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockchainStatus**](StatusApi.md#getBlockchainStatus) | **GET** /v1/blockchains/{chainId}/status | Returns the status of the provided blockchain.
[**getBlockchainsStatus**](StatusApi.md#getBlockchainsStatus) | **GET** /v1/blockchains/status | Gets a list of all supported blockchains and their statuses.
[**getServerStatus**](StatusApi.md#getServerStatus) | **GET** /v1/server/status | Gets the Key Connect server status.


<a name="getBlockchainStatus"></a>
# **getBlockchainStatus**
> BlockchainStatus getBlockchainStatus(chainId, network)

Returns the status of the provided blockchain.

Gets status of the provided blockchain identified by &#x60;chainId&#x60;.

### Example
```java
// Import classes:
import app.keyconnect.api.ApiClient;
import app.keyconnect.api.ApiException;
import app.keyconnect.api.Configuration;
import app.keyconnect.api.models.*;
import app.keyconnect.api.client.StatusApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    StatusApi apiInstance = new StatusApi(defaultClient);
    String chainId = "chainId_example"; // String | ID of the block chain
    String network = "testnet"; // String | Blockchain network to get the status from.
    try {
      BlockchainStatus result = apiInstance.getBlockchainStatus(chainId, network);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StatusApi#getBlockchainStatus");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| ID of the block chain | [enum: xrp, eth, btc]
 **network** | **String**| Blockchain network to get the status from. | [optional]

### Return type

[**BlockchainStatus**](BlockchainStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="getBlockchainsStatus"></a>
# **getBlockchainsStatus**
> AvailableBlockchains getBlockchainsStatus()

Gets a list of all supported blockchains and their statuses.

Key Connect server keeps track of the individual status of the supported blockchains. Use this API to check the blockchain statuses.

### Example
```java
// Import classes:
import app.keyconnect.api.ApiClient;
import app.keyconnect.api.ApiException;
import app.keyconnect.api.Configuration;
import app.keyconnect.api.models.*;
import app.keyconnect.api.client.StatusApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    StatusApi apiInstance = new StatusApi(defaultClient);
    try {
      AvailableBlockchains result = apiInstance.getBlockchainsStatus();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StatusApi#getBlockchainsStatus");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AvailableBlockchains**](AvailableBlockchains.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="getServerStatus"></a>
# **getServerStatus**
> ServerStatusResponse getServerStatus()

Gets the Key Connect server status.

Gets the Key Connect server status along with any error information.

### Example
```java
// Import classes:
import app.keyconnect.api.ApiClient;
import app.keyconnect.api.ApiException;
import app.keyconnect.api.Configuration;
import app.keyconnect.api.models.*;
import app.keyconnect.api.client.StatusApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    StatusApi apiInstance = new StatusApi(defaultClient);
    try {
      ServerStatusResponse result = apiInstance.getServerStatus();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StatusApi#getServerStatus");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServerStatusResponse**](ServerStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

