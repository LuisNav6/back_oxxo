import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException,  Query, UseGuards} from '@nestjs/common';
import { CreateInventoryDto } from '../dtos/inventory/request/createInventory-request.dto';
import { UpdateInventoryDto } from '../dtos/inventory/request/updateInventory-request.dto';
import { InventoryService } from './inventory.service';
import { IInventory } from '../interfaces/inventory'
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('inventory')
@UseGuards(AuthGuard)
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

    @Get('branches/:branchId')
    async findAllByBranchId(@Param('branchId') branchId: string): Promise<IInventory[]> {
        return this.InventoryService.findAllByBranchId(branchId);
    }

    @Get('branch/:branchId')
    async findByBranchId(@Param('branchId') branchId: string): Promise<IInventory> {
        return this.InventoryService.findByBranchId(branchId);
    }

    @Post()
    @Roles(Role.ADMIN)
    async create(@Body() createInventoryDto: CreateInventoryDto): Promise<IInventory> {
        return this.InventoryService.create(createInventoryDto);
    }

    @Put(':id')
    @Roles(Role.ADMIN)
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
