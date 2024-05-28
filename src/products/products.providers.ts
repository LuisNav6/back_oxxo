import { Connection } from 'mongoose';
import { ProductsSchema } from 'src/schemas/products/products.schema';

export const ProductsProviders = [
  {
    provide: 'PRODUCT_MODEL',
    useFactory: (connection: Connection) => connection.model('Product', ProductsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
