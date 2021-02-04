# ServerApi

All URIs are relative to *https://api.keyconnect.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getServerStatus**](ServerApi.md#getServerStatus) | **GET** /v1/server/status | Gets the Key Connect server status.


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
import app.keyconnect.api.client.ServerApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    ServerApi apiInstance = new ServerApi(defaultClient);
    try {
      ServerStatusResponse result = apiInstance.getServerStatus();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServerApi#getServerStatus");
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

