export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './batchApi';
import { BatchApi } from './batchApi';
export * from './blockchainsApi';
import { BlockchainsApi } from './blockchainsApi';
export * from './generatorApi';
import { GeneratorApi } from './generatorApi';
export * from './paymentsApi';
import { PaymentsApi } from './paymentsApi';
export * from './ratesApi';
import { RatesApi } from './ratesApi';
export * from './serverApi';
import { ServerApi } from './serverApi';
export * from './statusApi';
import { StatusApi } from './statusApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountsApi, BatchApi, BlockchainsApi, GeneratorApi, PaymentsApi, RatesApi, ServerApi, StatusApi, TransactionsApi];
