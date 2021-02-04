# BlockchainsApi

All URIs are relative to *https://api.keyconnect.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateXrpTransaction**](BlockchainsApi.md#generateXrpTransaction) | **GET** /v1/blockchains/xrp/generator/payment | Generates a transaction as a payment.
[**getAccountInfo**](BlockchainsApi.md#getAccountInfo) | **GET** /v1/blockchains/{chainId}/accounts/{accountId} | Returns account / wallet information for the provided &#x60;chainId&#x60; representing the blockchain.
[**getAccountPayments**](BlockchainsApi.md#getAccountPayments) | **GET** /v1/blockchains/{chainId}/accounts/{accountId}/payments | Returns paginated list of payments.
[**getAccountTransactions**](BlockchainsApi.md#getAccountTransactions) | **GET** /v1/blockchains/{chainId}/accounts/{accountId}/transactions | Returns paginated list of transactions.
[**getBlockchainStatus**](BlockchainsApi.md#getBlockchainStatus) | **GET** /v1/blockchains/{chainId}/status | Returns the status of the provided blockchain.
[**getBlockchainsAccounts**](BlockchainsApi.md#getBlockchainsAccounts) | **POST** /v1/batch/blockchains/accounts/info | Gets account details of all specified accounts
[**getBlockchainsStatus**](BlockchainsApi.md#getBlockchainsStatus) | **GET** /v1/blockchains/status | Gets a list of all supported blockchains and their statuses.
[**getFee**](BlockchainsApi.md#getFee) | **GET** /v1/blockchains/{chainId}/fee | Returns the blockchain transaction fee.
[**getTransaction**](BlockchainsApi.md#getTransaction) | **GET** /v1/blockchains/{chainId}/transactions/{hash} | Get a single transaction object by its provided &#x60;hash&#x60; on the specified &#x60;chainId&#x60;.
[**submitTransaction**](BlockchainsApi.md#submitTransaction) | **POST** /v1/blockchains/{chainId}/transactions | Submit a transaction to the blockchain.


<a name="generateXrpTransaction"></a>
# **generateXrpTransaction**
> Object generateXrpTransaction(sourceAccount, destinationAccount, amount, destinationTag, fee, network)

Generates a transaction as a payment.

Helper method to generate a transaction object for the purpose of a payment between the source account identified by &#x60;sourceAccount&#x60; and destination account idenfied by &#x60;destinationAccount&#x60; for the value of &#x60;amount&#x60;.

### Example
```java
// Import classes:
import app.keyconnect.api.ApiClient;
import app.keyconnect.api.ApiException;
import app.keyconnect.api.Configuration;
import app.keyconnect.api.models.*;
import app.keyconnect.api.client.BlockchainsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    BlockchainsApi apiInstance = new BlockchainsApi(defaultClient);
    String sourceAccount = "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe"; // String | Source account
    String destinationAccount = "rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv"; // String | Destination account
    String amount = "10000000"; // String | Payment amount in drops
    BigDecimal destinationTag = new BigDecimal(78); // BigDecimal | Destination tag
    String fee = "5200"; // String | Fee to the ledger in drops. If this field is omitted, then `network` must be specified.
    String network = "\"mainnet\""; // String |  Blockchain network to get the account info from. For XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. This field is required if `fee` is not specified in order to dynamically obtain the fee from the network. 
    try {
      Object result = apiInstance.generateXrpTransaction(sourceAccount, destinationAccount, amount, destinationTag, fee, network);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockchainsApi#generateXrpTransaction");
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
 **sourceAccount** | **String**| Source account |
 **destinationAccount** | **String**| Destination account |
 **amount** | **String**| Payment amount in drops |
 **destinationTag** | **BigDecimal**| Destination tag | [optional]
 **fee** | **String**| Fee to the ledger in drops. If this field is omitted, then &#x60;network&#x60; must be specified. | [optional]
 **network** | **String**|  Blockchain network to get the account info from. For XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. This field is required if &#x60;fee&#x60; is not specified in order to dynamically obtain the fee from the network.  | [optional] [default to &quot;mainnet&quot;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

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
import app.keyconnect.api.client.BlockchainsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    BlockchainsApi apiInstance = new BlockchainsApi(defaultClient);
    String chainId = "xrp"; // String | ID of the block chain
    String accountId = "rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv"; // String | Identifier representing the account. This is most likely the wallet address.
    String network = "\"mainnet\""; // String |  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. 
    String fiat = "USD"; // String | Used to provide equivalent value in specified fiat
    try {
      BlockchainAccountInfo result = apiInstance.getAccountInfo(chainId, accountId, network, fiat);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockchainsApi#getAccountInfo");
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
import app.keyconnect.api.client.BlockchainsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    BlockchainsApi apiInstance = new BlockchainsApi(defaultClient);
    String chainId = "xrp"; // String | 
    String accountId = "rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv"; // String | Identifier representing the account. This is most likely the wallet address.
    String network = "\"mainnet\""; // String |  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. 
    String cursor = "57112007:13"; // String | Cursor representing position among pages. Pass the cursor from previous get payments response to get the next page.
    String fiat = "USD"; // String | Used to provide equivalent value in specified fiat
    try {
      BlockchainAccountPayments result = apiInstance.getAccountPayments(chainId, accountId, network, cursor, fiat);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockchainsApi#getAccountPayments");
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
import app.keyconnect.api.client.BlockchainsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    BlockchainsApi apiInstance = new BlockchainsApi(defaultClient);
    String chainId = "xrp"; // String | 
    String accountId = "rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv"; // String | Identifier representing the account. This is most likely the wallet address.
    String network = "\"mainnet\""; // String |  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. 
    String cursor = "57112007:13"; // String | Cursor representing position among pages. Pass the cursor from previous get transactions response to get the next page.
    String fiat = "USD"; // String | Used to provide equivalent value in specified fiat
    try {
      BlockchainAccountTransactions result = apiInstance.getAccountTransactions(chainId, accountId, network, cursor, fiat);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockchainsApi#getAccountTransactions");
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
import app.keyconnect.api.client.BlockchainsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    BlockchainsApi apiInstance = new BlockchainsApi(defaultClient);
    String chainId = "chainId_example"; // String | ID of the block chain
    String network = "testnet"; // String | Blockchain network to get the status from.
    try {
      BlockchainStatus result = apiInstance.getBlockchainStatus(chainId, network);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockchainsApi#getBlockchainStatus");
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
import app.keyconnect.api.client.BlockchainsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    BlockchainsApi apiInstance = new BlockchainsApi(defaultClient);
    String network = "testnet"; // String | Blockchain network to get the status from.
    AccountsInfoRequest accountsInfoRequest = new AccountsInfoRequest(); // AccountsInfoRequest | List of accounts with their chainIds to get info for
    try {
      AccountsInfoResponse result = apiInstance.getBlockchainsAccounts(network, accountsInfoRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockchainsApi#getBlockchainsAccounts");
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
import app.keyconnect.api.client.BlockchainsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    BlockchainsApi apiInstance = new BlockchainsApi(defaultClient);
    try {
      AvailableBlockchains result = apiInstance.getBlockchainsStatus();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockchainsApi#getBlockchainsStatus");
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

<a name="getFee"></a>
# **getFee**
> BlockchainFee getFee(chainId, network)

Returns the blockchain transaction fee.

Gets fee of the provided blockchain identified by &#x60;chainId&#x60;.

### Example
```java
// Import classes:
import app.keyconnect.api.ApiClient;
import app.keyconnect.api.ApiException;
import app.keyconnect.api.Configuration;
import app.keyconnect.api.models.*;
import app.keyconnect.api.client.BlockchainsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    BlockchainsApi apiInstance = new BlockchainsApi(defaultClient);
    String chainId = "chainId_example"; // String | ID of the block chain
    String network = "testnet"; // String | Blockchain network to get the status from.
    try {
      BlockchainFee result = apiInstance.getFee(chainId, network);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockchainsApi#getFee");
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

[**BlockchainFee**](BlockchainFee.md)

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
import app.keyconnect.api.client.BlockchainsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    BlockchainsApi apiInstance = new BlockchainsApi(defaultClient);
    String chainId = "chainId_example"; // String | 
    String hash = "hash_example"; // String | Hash of the transaction to lookup
    String network = "\"mainnet\""; // String |  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. 
    String fiat = "USD"; // String | Used to provide equivalent value in specified fiat
    try {
      BlockchainAccountTransaction result = apiInstance.getTransaction(chainId, hash, network, fiat);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockchainsApi#getTransaction");
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
import app.keyconnect.api.client.BlockchainsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    BlockchainsApi apiInstance = new BlockchainsApi(defaultClient);
    String chainId = "chainId_example"; // String | 
    String network = "\"mainnet\""; // String |  Blockchain network to get the account info from. For example, for XRP this would be one of (testnet/devnet/mainnet). More information regarding what environments are available can be obtained from /v1/blockchains/{chainId}/status endpoint. 
    SubmitTransactionRequest submitTransactionRequest = new SubmitTransactionRequest(); // SubmitTransactionRequest | Request payload containing the transaction to submit to specified `chainId`.
    try {
      SubmitTransactionResult result = apiInstance.submitTransaction(chainId, network, submitTransactionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockchainsApi#submitTransaction");
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

