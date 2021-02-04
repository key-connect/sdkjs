# BatchApi

All URIs are relative to *https://api.keyconnect.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockchainsAccounts**](BatchApi.md#getBlockchainsAccounts) | **POST** /v1/batch/blockchains/accounts/info | Gets account details of all specified accounts


<a name="getBlockchainsAccounts"></a>
# **getBlockchainsAccounts**
> AccountsInfoResponse getBlockchainsAccounts(network, accountsInfoRequest)

Gets account details of all specified accounts

Batch call that returns details of all accounts in the request across all specified blockchains.

### Example
```java
// Import classes:
import app.keyconnect.api.ApiClient;
import app.keyconnect.api.ApiException;
import app.keyconnect.api.Configuration;
import app.keyconnect.api.models.*;
import app.keyconnect.api.client.BatchApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    BatchApi apiInstance = new BatchApi(defaultClient);
    String network = "testnet"; // String | Blockchain network to get the status from.
    AccountsInfoRequest accountsInfoRequest = new AccountsInfoRequest(); // AccountsInfoRequest | List of accounts with their chainIds to get info for
    try {
      AccountsInfoResponse result = apiInstance.getBlockchainsAccounts(network, accountsInfoRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BatchApi#getBlockchainsAccounts");
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
 **network** | **String**| Blockchain network to get the status from. | [optional]
 **accountsInfoRequest** | [**AccountsInfoRequest**](AccountsInfoRequest.md)| List of accounts with their chainIds to get info for | [optional]

### Return type

[**AccountsInfoResponse**](AccountsInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

