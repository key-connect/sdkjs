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
import { BlockchainNetworkServerStatus } from './blockchainNetworkServerStatus';

/**
* Blockchain network object identifying the group and the list of servers under this group.
*/
export class BlockchainNetwork {
    'group'?: string;
    'servers'?: Array<BlockchainNetworkServerStatus>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "group",
            "baseName": "group",
            "type": "string"
        },
        {
            "name": "servers",
            "baseName": "servers",
            "type": "Array<BlockchainNetworkServerStatus>"
        }    ];

    static getAttributeTypeMap() {
        return BlockchainNetwork.attributeTypeMap;
    }
}

