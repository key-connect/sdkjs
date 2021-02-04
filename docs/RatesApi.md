# RatesApi

All URIs are relative to *https://api.keyconnect.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRate**](RatesApi.md#getRate) | **GET** /v1/rates/{base}/{counter} | Gets the currency conversion rate for the provided base and counter currency.


<a name="getRate"></a>
# **getRate**
> RateResponse getRate(base, counter)

Gets the currency conversion rate for the provided base and counter currency.

Returns the applicable rate to convert between the provided base and counter currency.

### Example
```java
// Import classes:
import app.keyconnect.api.ApiClient;
import app.keyconnect.api.ApiException;
import app.keyconnect.api.Configuration;
import app.keyconnect.api.models.*;
import app.keyconnect.api.client.RatesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    RatesApi apiInstance = new RatesApi(defaultClient);
    String base = "ETH"; // String | Base currency
    String counter = "USD"; // String | Counter currency
    try {
      RateResponse result = apiInstance.getRate(base, counter);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RatesApi#getRate");
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
 **base** | **String**| Base currency |
 **counter** | **String**| Counter currency |

### Return type

[**RateResponse**](RateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

