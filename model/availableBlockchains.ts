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
import { BlockchainStatus } from './blockchainStatus';

/**
* List of available blockchains and their statuses
*/
export class AvailableBlockchains {
    'blockchains'?: Array<BlockchainStatus>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "blockchains",
            "baseName": "blockchains",
            "type": "Array<BlockchainStatus>"
        }    ];

    static getAttributeTypeMap() {
        return AvailableBlockchains.attributeTypeMap;
    }
}

