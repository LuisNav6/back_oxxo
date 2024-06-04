import { Connection } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { SalesSchema } from 'src/schemas/sales/sales.schema';
import { InventorySchema } from 'src/schemas/inventory/inventory.schema'; // Asegúrate de importar el esquema de inventario

export const SalesProviders = [
    {
        provide: 'SALES_MODEL',
        useFactory: (connection: Connection) => connection.model('Sales', SalesSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'INVENTORY_MODEL',
        useFactory: (connection: Connection) => connection.model('INVENTORY', InventorySchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
