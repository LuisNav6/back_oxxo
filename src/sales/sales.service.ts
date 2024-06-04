import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { CreateSaleDto } from 'src/dtos/sales/request/createSale.dto';
import { IInventory } from 'src/interfaces/inventory';
import { ISales } from 'src/interfaces/sales';


@Injectable()
export class SalesService {
    constructor(
        @Inject('SALES_MODEL')
        private SalesModel: Model<ISales>,
        @Inject('INVENTORY_MODEL')
        private InventoryModel: Model<IInventory>
    ) { }

    async findAll(): Promise<ISales[]> {
        return this.SalesModel.find().exec();
    }

    async findOne(id: string): Promise<ISales> {
        return this.SalesModel.findById(id).exec();
    }

    async findByBranchOffice(branch_office_id: string): Promise<ISales[]> {
        return this.SalesModel.find({ branch_office_id }).exec();
    }

    async create(createSaleDto: CreateSaleDto): Promise<ISales> {
        const { branch_office_id, products } = createSaleDto;

        // Obtener el inventario de la sucursal
        const inventory = await this.InventoryModel.findOne({ branch_office_id: new Types.ObjectId(branch_office_id) }).exec();
        if (!inventory) {
            throw new NotFoundException(`Inventory for branch office ${branch_office_id} not found`);
        }

        // Verificar si la cantidad de productos en la venta no excede el inventario
        for (const product of products) {
            const inventoryItem = inventory.inventory.find(item => item.product_id.equals(product.product_id));
            if (!inventoryItem) {
                throw new NotFoundException(`Product ${product.product_id} not found in inventory`);
            }
            if (inventoryItem.quantity < product.quantity) {
                throw new BadRequestException(`Not enough inventory for product ${product.product_id}`);
            }
        }

        // Crear la venta
        const newSale = new this.SalesModel(createSaleDto);
        await newSale.save();

        // Actualizar el inventario restando las cantidades vendidas
        for (const product of products) {
            await this.InventoryModel.updateOne(
                { branch_office_id: new Types.ObjectId(branch_office_id), 'inventory.product_id': new Types.ObjectId(product.product_id) },
                { $inc: { 'inventory.$.quantity': -product.quantity } }
            ).exec();
        }

        return newSale;
    }


}
