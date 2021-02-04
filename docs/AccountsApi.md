# AccountsApi

All URIs are relative to *https://api.keyconnect.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountInfo**](AccountsApi.md#getAccountInfo) | **GET** /v1/blockchains/{chainId}/accounts/{accountId} | Returns account / wallet information for the provided &#x60;chainId&#x60; representing the blockchain.
[**getAccountPayments**](AccountsApi.md#getAccountPayments) | **GET** /v1/blockchains/{chainId}/accounts/{accountId}/payments | Returns paginated list of payments.
[**getAccountTransactions**](AccountsApi.md#getAccountTransactions) | **GET** /v1/blockchains/{chainId}/accounts/{accountId}/transactions | Returns paginated list of transactions.
[**getBlockchainsAccounts**](AccountsApi.md#getBlockchainsAccounts) | **POST** /v1/batch/blockchains/accounts/info | Gets account details of all specified accounts


<a name="getAccountInfo"></a>
# **getAccountInfo**
> BlockchainAccountInfo getAccountInfo(chainId, accountId, network, fiat)

Returns account / wallet information for the provided &#x60;chainId&#x60; representing the blockchain.

Gets account / wallet information like &#x60;balance&#x60;, &#x60;lastTransactionId&#x60; etc of the specified blockchain identified by &#x60;chainId&#x60;.

### Example
```java
// Import classes:
import app.keyconnect.api.ApiClient;
import app.keyconnect.api.ApiException;
import app.keyconnect.api.Configuration;
import app.keyconnect.api.models.*;
import app.keyconnect.api.client.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String chainId = "xrp"; // String | ID of the block chain
    String accountId = "rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv"; // String | Identifier representing the account. This is most likely the wallet address.
    String network = "\"mainnet\""; // String |  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. 
    String fiat = "USD"; // String | Used to provide equivalent value in specified fiat
    try {
      BlockchainAccountInfo result = apiInstance.getAccountInfo(chainId, accountId, network, fiat);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#getAccountInfo");
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
 **accountId** | **String**| Identifier representing the account. This is most likely the wallet address. |
 **network** | **String**|  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint.  | [optional] [default to &quot;mainnet&quot;]
 **fiat** | **String**| Used to provide equivalent value in specified fiat | [optional] [enum: USD, GBP, EUR]

### Return type

[**BlockchainAccountInfo**](BlockchainAccountInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="getAccountPayments"></a>
# **getAccountPayments**
> BlockchainAccountPayments getAccountPayments(chainId, accountId, network, cursor, fiat)

Returns paginated list of payments.

Gets payments for given &#x60;accountId&#x60; on a given blockchain identified by the &#x60;chainId&#x60; parameter. Return the &#x60;cursor&#x60; value in the next call to get the next page.

### Example
```java
// Import classes:
import app.keyconnect.api.ApiClient;
import app.keyconnect.api.ApiException;
import app.keyconnect.api.Configuration;
import app.keyconnect.api.models.*;
import app.keyconnect.api.client.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String chainId = "xrp"; // String | 
    String accountId = "rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv"; // String | Identifier representing the account. This is most likely the wallet address.
    String network = "\"mainnet\""; // String |  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. 
    String cursor = "57112007:13"; // String | Cursor representing position among pages. Pass the cursor from previous get payments response to get the next page.
    String fiat = "USD"; // String | Used to provide equivalent value in specified fiat
    try {
      BlockchainAccountPayments result = apiInstance.getAccountPayments(chainId, accountId, network, cursor, fiat);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#getAccountPayments");
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
 **chainId** | **String**|  | [enum: xrp, eth, btc]
 **accountId** | **String**| Identifier representing the account. This is most likely the wallet address. |
 **network** | **String**|  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint.  | [optional] [default to &quot;mainnet&quot;]
 **cursor** | **String**| Cursor representing position among pages. Pass the cursor from previous get payments response to get the next page. | [optional]
 **fiat** | **String**| Used to provide equivalent value in specified fiat | [optional] [enum: USD, GBP, EUR]

### Return type

[**BlockchainAccountPayments**](BlockchainAccountPayments.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="getAccountTransactions"></a>
# **getAccountTransactions**
> BlockchainAccountTransactions getAccountTransactions(chainId, accountId, network, cursor, fiat)

Returns paginated list of transactions.

Gets transactions for given &#x60;accountId&#x60; on a given blockchain identified by the &#x60;chainId&#x60; parameter. Return the &#x60;cursor&#x60; value in the next call to get the next page.

### Example
```java
// Import classes:
import app.keyconnect.api.ApiClient;
import app.keyconnect.api.ApiException;
import app.keyconnect.api.Configuration;
import app.keyconnect.api.models.*;
import app.keyconnect.api.client.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String chainId = "xrp"; // String | 
    String accountId = "rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv"; // String | Identifier representing the account. This is most likely the wallet address.
    String network = "\"mainnet\""; // String |  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. 
    String cursor = "57112007:13"; // String | Cursor representing position among pages. Pass the cursor from previous get transactions response to get the next page.
    String fiat = "USD"; // String | Used to provide equivalent value in specified fiat
    try {
      BlockchainAccountTransactions result = apiInstance.getAccountTransactions(chainId, accountId, network, cursor, fiat);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#getAccountTransactions");
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
 **chainId** | **String**|  | [enum: xrp, eth, btc]
 **accountId** | **String**| Identifier representing the account. This is most likely the wallet address. |
 **network** | **String**|  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint.  | [optional] [default to &quot;mainnet&quot;]
 **cursor** | **String**| Cursor representing position among pages. Pass the cursor from previous get transactions response to get the next page. | [optional]
 **fiat** | **String**| Used to provide equivalent value in specified fiat | [optional] [enum: USD, GBP, EUR]

### Return type

[**BlockchainAccountTransactions**](BlockchainAccountTransactions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

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
import app.keyconnect.api.client.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String network = "testnet"; // String | Blockchain network to get the status from.
    AccountsInfoRequest accountsInfoRequest = new AccountsInfoRequest(); // AccountsInfoRequest | List of accounts with their chainIds to get info for
    try {
      AccountsInfoResponse result = apiInstance.getBlockchainsAccounts(network, accountsInfoRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#getBlockchainsAccounts");
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

