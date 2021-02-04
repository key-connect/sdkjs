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
import { CurrencyValue } from './currencyValue';
import { GenericCurrencyValue } from './genericCurrencyValue';

/**
* Individual transaction for a specific blockchain account / wallet.
*/
export class BlockchainAccountTransactionItem {
    /**
    * One of `success`, `failure` or `pending` in most cases. In case the server returns unusual status, this attribute will reflect the raw value.
    */
    'status'?: string;
    'type'?: string;
    'sourceAccount'?: string;
    'destinationAccount'?: string;
    'destinationTag'?: string;
    'fee'?: CurrencyValue;
    'amount'?: CurrencyValue;
    'value'?: GenericCurrencyValue;
    'hash'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "sourceAccount",
            "baseName": "sourceAccount",
            "type": "string"
        },
        {
            "name": "destinationAccount",
            "baseName": "destinationAccount",
            "type": "string"
        },
        {
            "name": "destinationTag",
            "baseName": "destinationTag",
            "type": "string"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "CurrencyValue"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "CurrencyValue"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "GenericCurrencyValue"
        },
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BlockchainAccountTransactionItem.attributeTypeMap;
    }
}

