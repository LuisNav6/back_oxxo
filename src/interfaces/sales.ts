import * as mongoose from 'mongoose';
export interface ISales extends Document {
    readonly products: IProductItem[];
    readonly branch_office_id: mongoose.Types.ObjectId;
    readonly sale_date: String;
    readonly total: mongoose.Decimal128;
    readonly seller: String;
    

}

interface IProductItem {
    readonly product_id: mongoose.Types.ObjectId,
    readonly quantity: number
}