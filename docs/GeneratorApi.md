# GeneratorApi

All URIs are relative to *https://api.keyconnect.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateXrpTransaction**](GeneratorApi.md#generateXrpTransaction) | **GET** /v1/blockchains/xrp/generator/payment | Generates a transaction as a payment.


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
import app.keyconnect.api.client.GeneratorApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.keyconnect.app");

    GeneratorApi apiInstance = new GeneratorApi(defaultClient);
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
      System.err.println("Exception when calling GeneratorApi#generateXrpTransaction");
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

