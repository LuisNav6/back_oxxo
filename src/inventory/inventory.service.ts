import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateInventoryDto } from '../dtos/inventory/request/createInventory-request.dto';
import { UpdateInventoryDto } from '../dtos/inventory/request/updateInventory-request.dto';
import { IInventory } from '../interfaces/inventory';

@Injectable()
export class InventoryService {
    constructor(
        @Inject('INVENTORY_MODEL')
        private InventoryModel: Model<IInventory>,
    ) { }

    async findAll(): Promise<IInventory[]> {
        return this.InventoryModel.find().exec();
    }

    async findOne(id: string): Promise<IInventory> {
        return this.InventoryModel.findById(id).exec();
    }

    async create(createInventoryDto: CreateInventoryDto): Promise<IInventory> {
        const newInventory = new this.InventoryModel(createInventoryDto);
        return newInventory.save();
    }

    async update(id: string, updateInventoryDto: UpdateInventoryDto): Promise<IInventory> {
        return this.InventoryModel.findByIdAndUpdate(id, updateInventoryDto, { new: true }).exec();
    }

    async delete(id: string): Promise<IInventory> {
        return this.InventoryModel.findByIdAndDelete(id).exec();
    }

}
