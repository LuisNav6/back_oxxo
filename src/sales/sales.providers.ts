import { Connection } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { SalesSchema } from 'src/schemas/sales/sales.schema';

export const SalesProviders = [
    {
        provide: 'SALES_MODEL',
        useFactory: (connection: Connection) => connection.model('Sales', SalesSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];