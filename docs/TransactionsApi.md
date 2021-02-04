# TransactionsApi

All URIs are relative to *https://api.keyconnect.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountTransactions**](TransactionsApi.md#getAccountTransactions) | **GET** /v1/blockchains/{chainId}/accounts/{accountId}/transactions | Returns paginated list of transactions.
[**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /v1/blockchains/{chainId}/transactions/{hash} | Get a single transaction object by its provided &#x60;hash&#x60; on the specified &#x60;chainId&#x60;.
[**submitTransaction**](TransactionsApi.md#submitTransaction) | **POST** /v1/blockchains/{chainId}/transactions | Submit a transaction to the blockchain.


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
import app.keyconnect.api.client.TransactionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    TransactionsApi apiInstance = new TransactionsApi(defaultClient);
    String chainId = "xrp"; // String | 
    String accountId = "rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv"; // String | Identifier representing the account. This is most likely the wallet address.
    String network = "\"mainnet\""; // String |  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. 
    String cursor = "57112007:13"; // String | Cursor representing position among pages. Pass the cursor from previous get transactions response to get the next page.
    String fiat = "USD"; // String | Used to provide equivalent value in specified fiat
    try {
      BlockchainAccountTransactions result = apiInstance.getAccountTransactions(chainId, accountId, network, cursor, fiat);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsApi#getAccountTransactions");
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

<a name="getTransaction"></a>
# **getTransaction**
> BlockchainAccountTransaction getTransaction(chainId, hash, network, fiat)

Get a single transaction object by its provided &#x60;hash&#x60; on the specified &#x60;chainId&#x60;.

Returned transaction object might be in greater detail than the one provided in the list.

### Example
```java
// Import classes:
import app.keyconnect.api.ApiClient;
import app.keyconnect.api.ApiException;
import app.keyconnect.api.Configuration;
import app.keyconnect.api.models.*;
import app.keyconnect.api.client.TransactionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    TransactionsApi apiInstance = new TransactionsApi(defaultClient);
    String chainId = "chainId_example"; // String | 
    String hash = "hash_example"; // String | Hash of the transaction to lookup
    String network = "\"mainnet\""; // String |  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. 
    String fiat = "USD"; // String | Used to provide equivalent value in specified fiat
    try {
      BlockchainAccountTransaction result = apiInstance.getTransaction(chainId, hash, network, fiat);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsApi#getTransaction");
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
 **hash** | **String**| Hash of the transaction to lookup |
 **network** | **String**|  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint.  | [optional] [default to &quot;mainnet&quot;]
 **fiat** | **String**| Used to provide equivalent value in specified fiat | [optional] [enum: USD, GBP, EUR]

### Return type

[**BlockchainAccountTransaction**](BlockchainAccountTransaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="submitTransaction"></a>
# **submitTransaction**
> SubmitTransactionResult submitTransaction(chainId, network, submitTransactionRequest)

Submit a transaction to the blockchain.

Provided transaction object is submitted directly to the blockchain identified by &#x60;chainId&#x60; as is.

### Example
```java
// Import classes:
import app.keyconnect.api.ApiClient;
import app.keyconnect.api.ApiException;
import app.keyconnect.api.Configuration;
import app.keyconnect.api.models.*;
import app.keyconnect.api.client.TransactionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    TransactionsApi apiInstance = new TransactionsApi(defaultClient);
    String chainId = "chainId_example"; // String | 
    String network = "\"mainnet\""; // String |  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. 
    SubmitTransactionRequest submitTransactionRequest = new SubmitTransactionRequest(); // SubmitTransactionRequest | Request payload containing the transaction to submit to specified `chainId`.
    try {
      SubmitTransactionResult result = apiInstance.submitTransaction(chainId, network, submitTransactionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsApi#submitTransaction");
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
 **network** | **String**|  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint.  | [optional] [default to &quot;mainnet&quot;]
 **submitTransactionRequest** | [**SubmitTransactionRequest**](SubmitTransactionRequest.md)| Request payload containing the transaction to submit to specified &#x60;chainId&#x60;. | [optional]

### Return type

[**SubmitTransactionResult**](SubmitTransactionResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |

