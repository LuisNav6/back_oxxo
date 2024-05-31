import * as mongoose from 'mongoose';
import { ISales } from 'src/interfaces/sales';
const { Schema } = mongoose;

export const SalesSchema = new Schema<ISales>({
    products: [{
        product_id: { type: Schema.Types.ObjectId, required: true },
        quantity: { type: Number, required: true }
    }],
    branch_office_id: { type: Schema.Types.ObjectId, required: true },
    sale_date: {type: Schema.Types.String, requiered: true},
    total: {type: Schema.Types.Decimal128, required: true},
    seller: {type: Schema.Types.String, required: true}
});

