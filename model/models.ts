import localVarRequest from 'request';

export * from './accountsInfoRequest';
export * from './accountsInfoRequestItem';
export * from './accountsInfoResponse';
export * from './availableBlockchains';
export * from './blockchainAccountInfo';
export * from './blockchainAccountPaymentItem';
export * from './blockchainAccountPayments';
export * from './blockchainAccountTransaction';
export * from './blockchainAccountTransactionItem';
export * from './blockchainAccountTransactions';
export * from './blockchainFee';
export * from './blockchainNetwork';
export * from './blockchainNetworkServerStatus';
export * from './blockchainStatus';
export * from './blockchainStatusResponse';
export * from './currencyValue';
export * from './exceptionalResponse';
export * from './genericCurrencyValue';
export * from './rate';
export * from './rateResponse';
export * from './serverErrorObject';
export * from './serverStatusResponse';
export * from './serverStatusResponseErrors';
export * from './subAccountInfo';
export * from './submitTransactionRequest';
export * from './submitTransactionResult';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountsInfoRequest } from './accountsInfoRequest';
import { AccountsInfoRequestItem } from './accountsInfoRequestItem';
import { AccountsInfoResponse } from './accountsInfoResponse';
import { AvailableBlockchains } from './availableBlockchains';
import { BlockchainAccountInfo } from './blockchainAccountInfo';
import { BlockchainAccountPaymentItem } from './blockchainAccountPaymentItem';
import { BlockchainAccountPayments } from './blockchainAccountPayments';
import { BlockchainAccountTransaction } from './blockchainAccountTransaction';
import { BlockchainAccountTransactionItem } from './blockchainAccountTransactionItem';
import { BlockchainAccountTransactions } from './blockchainAccountTransactions';
import { BlockchainFee } from './blockchainFee';
import { BlockchainNetwork } from './blockchainNetwork';
import { BlockchainNetworkServerStatus } from './blockchainNetworkServerStatus';
import { BlockchainStatus } from './blockchainStatus';
import { BlockchainStatusResponse } from './blockchainStatusResponse';
import { CurrencyValue } from './currencyValue';
import { ExceptionalResponse } from './exceptionalResponse';
import { GenericCurrencyValue } from './genericCurrencyValue';
import { Rate } from './rate';
import { RateResponse } from './rateResponse';
import { ServerErrorObject } from './serverErrorObject';
import { ServerStatusResponse } from './serverStatusResponse';
import { ServerStatusResponseErrors } from './serverStatusResponseErrors';
import { SubAccountInfo } from './subAccountInfo';
import { SubmitTransactionRequest } from './submitTransactionRequest';
import { SubmitTransactionResult } from './submitTransactionResult';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccountsInfoRequestItem.ChainIdEnum": AccountsInfoRequestItem.ChainIdEnum,
        "BlockchainAccountInfo.ChainIdEnum": BlockchainAccountInfo.ChainIdEnum,
        "BlockchainAccountPayments.ChainIdEnum": BlockchainAccountPayments.ChainIdEnum,
        "BlockchainAccountTransaction.ChainIdEnum": BlockchainAccountTransaction.ChainIdEnum,
        "BlockchainAccountTransactions.ChainIdEnum": BlockchainAccountTransactions.ChainIdEnum,
        "BlockchainFee.ChainIdEnum": BlockchainFee.ChainIdEnum,
        "BlockchainNetworkServerStatus.StatusEnum": BlockchainNetworkServerStatus.StatusEnum,
        "BlockchainStatusResponse.StatusEnum": BlockchainStatusResponse.StatusEnum,
        "CurrencyValue.CurrencyEnum": CurrencyValue.CurrencyEnum,
        "ServerErrorObject.CategoryEnum": ServerErrorObject.CategoryEnum,
        "ServerErrorObject.SeverityEnum": ServerErrorObject.SeverityEnum,
        "ServerStatusResponse.StatusEnum": ServerStatusResponse.StatusEnum,
        "ServerStatusResponseErrors.CategoryEnum": ServerStatusResponseErrors.CategoryEnum,
        "ServerStatusResponseErrors.SeverityEnum": ServerStatusResponseErrors.SeverityEnum,
        "SubmitTransactionResult.ChainIdEnum": SubmitTransactionResult.ChainIdEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountsInfoRequest": AccountsInfoRequest,
    "AccountsInfoRequestItem": AccountsInfoRequestItem,
    "AccountsInfoResponse": AccountsInfoResponse,
    "AvailableBlockchains": AvailableBlockchains,
    "BlockchainAccountInfo": BlockchainAccountInfo,
    "BlockchainAccountPaymentItem": BlockchainAccountPaymentItem,
    "BlockchainAccountPayments": BlockchainAccountPayments,
    "BlockchainAccountTransaction": BlockchainAccountTransaction,
    "BlockchainAccountTransactionItem": BlockchainAccountTransactionItem,
    "BlockchainAccountTransactions": BlockchainAccountTransactions,
    "BlockchainFee": BlockchainFee,
    "BlockchainNetwork": BlockchainNetwork,
    "BlockchainNetworkServerStatus": BlockchainNetworkServerStatus,
    "BlockchainStatus": BlockchainStatus,
    "BlockchainStatusResponse": BlockchainStatusResponse,
    "CurrencyValue": CurrencyValue,
    "ExceptionalResponse": ExceptionalResponse,
    "GenericCurrencyValue": GenericCurrencyValue,
    "Rate": Rate,
    "RateResponse": RateResponse,
    "ServerErrorObject": ServerErrorObject,
    "ServerStatusResponse": ServerStatusResponse,
    "ServerStatusResponseErrors": ServerStatusResponseErrors,
    "SubAccountInfo": SubAccountInfo,
    "SubmitTransactionRequest": SubmitTransactionRequest,
    "SubmitTransactionResult": SubmitTransactionResult,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
