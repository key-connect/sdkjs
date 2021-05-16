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

/**
* Represents the status of the block chain. This object is cached as per the `lastCheck` attribute.
*/
export class BlockchainStatusResponse {
    /**
    * Status of the block chain
    */
    'status'?: BlockchainStatusResponse.StatusEnum;
    /**
    * UTC timestamp representing when the status was last checked
    */
    'lastCheck'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "BlockchainStatusResponse.StatusEnum"
        },
        {
            "name": "lastCheck",
            "baseName": "lastCheck",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BlockchainStatusResponse.attributeTypeMap;
    }
}

export namespace BlockchainStatusResponse {
    export enum StatusEnum {
        Connected = <any> 'connected',
        Disconnected = <any> 'disconnected'
    }
}
