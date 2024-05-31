import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { ISale } from '../interfaces/sales';
import { CreateSaleDto } from '../dtos/sales/request/createSale-request.dto';
import { InventoryService } from '../inventory/inventory.service';

@Injectable()
export class SaleService {
    constructor(
        @Inject('SALE_MODEL')
        private SaleModel: Model<ISale>,
        private readonly inventoryService: InventoryService,
    ) { }

    async create(createSaleDto: CreateSaleDto): Promise<ISale> {
        const session = await this.SaleModel.db.startSession();
        session.startTransaction();
        try {
            const newSale = new this.SaleModel(createSaleDto);
            await newSale.save({ session });
            
            // Update inventory
            for (const product of createSaleDto.products) {
                await this.inventoryService.updateInventoryAfterSale(
                    createSaleDto.branch_office_id, 
                    product.product_id, 
                    product.quantity, 
                    session
                );
            }

            await session.commitTransaction();
            session.endSession();
            return newSale;
        } catch (error) {
            await session.abortTransaction();
            session.endSession();
            throw error;
        }
    }

    // Additional CRUD operations for sales can be implemented here
}
