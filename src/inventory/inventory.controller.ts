import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateInventoryDto } from '../dtos/inventory/request/createInventory-request.dto';
import { UpdateInventoryDto } from '../dtos/inventory/request/updateInventory-request.dto';
import { InventoryService } from './inventory.service';
import { IInventory } from '../interfaces/inventory'


@Controller('inventory')
export class InventoryController {
    constructor(private readonly InventoryService: InventoryService) {  }

    @Get()
    async findAll(): Promise<IInventory[]> {
        return this.InventoryService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<IInventory> {
        return this.InventoryService.findOne(id);
    }

    @Post()
    async create(@Body() createInventoryDto: CreateInventoryDto): Promise<IInventory> {
        return this.InventoryService.create(createInventoryDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateInventoryDto: UpdateInventoryDto): Promise<IInventory> {
        try{
            return this.InventoryService.update(id, updateInventoryDto);
        } catch (error) {
            if (error instanceof NotFoundException) {
            throw new NotFoundException(error.message);
            }
            throw error;
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<IInventory> {
        try{
            return this.InventoryService.delete(id);
        } catch (error) {
            if (error instanceof NotFoundException) {
            throw new NotFoundException(error.message);
            }
            throw error;
        }
    }
}
