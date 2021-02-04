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
import { BlockchainAccountInfo } from './blockchainAccountInfo';

export class AccountsInfoResponse {
    'network'?: string;
    'accounts'?: Array<BlockchainAccountInfo>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "network",
            "baseName": "network",
            "type": "string"
        },
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<BlockchainAccountInfo>"
        }    ];

    static getAttributeTypeMap() {
        return AccountsInfoResponse.attributeTypeMap;
    }
}

