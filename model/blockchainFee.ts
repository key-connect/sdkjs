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

/**
* Blockchain fee.
*/
export class BlockchainFee {
    'chainId'?: BlockchainFee.ChainIdEnum;
    'network'?: string;
    'server'?: string;
    'fee'?: CurrencyValue;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "BlockchainFee.ChainIdEnum"
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
            "name": "fee",
            "baseName": "fee",
            "type": "CurrencyValue"
        }    ];

    static getAttributeTypeMap() {
        return BlockchainFee.attributeTypeMap;
    }
}

export namespace BlockchainFee {
    export enum ChainIdEnum {
        Xrp = <any> 'xrp',
        Eth = <any> 'eth'
    }
}
