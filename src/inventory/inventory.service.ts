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
    async findAllByBranchId(branchId: string): Promise<IInventory[]> {
        const inventories = await this.InventoryModel.find({ branch_office_id: branchId }).exec();
        if (!inventories || inventories.length === 0) {
            throw new NotFoundException(`No inventories found for branch office ID ${branchId}`);
        }
        return inventories;
    }

    async findByBranchId(branchId: string): Promise<IInventory> {
        const inventory = await this.InventoryModel.findOne({ branch_office_id: branchId }).exec();
        if (!inventory) {
            throw new NotFoundException(`No inventories found for branch office ID ${branchId}`);
        }
        return inventory;
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
