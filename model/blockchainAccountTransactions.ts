/**
 * Key Connect API
 * Blockchain access made simple
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: manthan@keyconnect.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { BlockchainAccountTransactionItem } from './blockchainAccountTransactionItem';

/**
* List of transactions for a specified blockchain account / wallet within the specified `cursor`.
*/
export class BlockchainAccountTransactions {
    'chainId'?: BlockchainAccountTransactions.ChainIdEnum;
    'network'?: string;
    'server'?: string;
    'accountId'?: string;
    /**
    * Format varies by the blockchain. For XRP, the value of `cursor` will be the `ledger:seq` from the marker object. This value is null when there are no more pages.
    */
    'cursor'?: string;
    'transactions'?: Array<BlockchainAccountTransactionItem>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "BlockchainAccountTransactions.ChainIdEnum"
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "string"
        },
        {
            "name": "server",
            "baseName": "server",
            "type": "string"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        },
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "Array<BlockchainAccountTransactionItem>"
        }    ];

    static getAttributeTypeMap() {
        return BlockchainAccountTransactions.attributeTypeMap;
    }
}

export namespace BlockchainAccountTransactions {
    export enum ChainIdEnum {
        xrp = <any> 'xrp',
        eth = <any> 'eth',
        btc = <any> 'btc'
    }
}
