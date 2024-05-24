import { Connection } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InventorySchema } from 'src/schemas/inventory/inventory.schema';

export const InventoryProviders = [
    {
        provide: 'INVENTORY_MODEL',
        useFactory: (connection: Connection) => connection.model('INVENTORY', InventorySchema),
        inject: ['DATABASE_CONNECTION'],
    },
];