import { Connection } from 'mongoose';
import { ProductSchema } from './schema/product.schemas';

export const ProductProviders = [
  {
    provide: 'PRODUCT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('product', ProductSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
