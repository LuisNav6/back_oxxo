// branch_offices.providers.ts
import { Connection } from 'mongoose';
import { BranchOfficeSchema } from '../schemas/branch_offices/branch_offices.schema';

export const BranchOfficesProviders = [
  {
    provide: 'BRANCH_OFFICE_MODEL',
    useFactory: (connection: Connection) => connection.model('Branch_Office', BranchOfficeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
