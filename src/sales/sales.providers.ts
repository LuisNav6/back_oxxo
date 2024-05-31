import { Connection } from 'mongoose';
import { SaleSchema } from '../schemas/sales/sales.schema';

export const SalesProviders = [
  {
    provide: 'SALE_MODEL',
    useFactory: (connection: Connection) => connection.model('Sale', SaleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
